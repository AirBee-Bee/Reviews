var db = require('./index.js');

var stringMaker = function(stringLength) {
  var words = ['this', 'property', 'great', 'has', 'view', 'amenities', 'awesome', 'cottage', 'close', 'check-in', 'termites', 'pool'];
  var randomString = '';
  for (let word = 0; word < stringLength; word++) {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    randomString += `${randomWord} `;
  }
  randomString = randomString.slice(0, randomString.length - 1);
  return randomString;
};

var randomScore = function(min, max) {
  var random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

module.exports.reviewSeeder = function() {
  var content = stringMaker(20);
  var cleanliness = randomScore(0, 6);
  var communication = randomScore(0, 6);
  var check_in = randomScore(0, 6);
  var accuracy = randomScore(0, 6);
  var location = randomScore(0, 6);
  var value = randomScore(0, 6);
  var property_name = stringMaker(1);
  var user = randomScore(0, 20);
  var date = `${randomScore(2015, 2020)}-${randomScore(10, 12)}-${randomScore(10, 28)}`;
  var review_text = stringMaker(10);
  var values = [`${cleanliness}`, `${communication}`, `${check_in}`, `${accuracy}`, `${location}`, `${value}`, property_name, user, `${date}`, review_text];
  var reviewString = 'INSERT INTO REVIEWS (cleanliness, communication, check_in, accuracy, location, value, property_name, user, date, review_text) VALUES (?);';
  db.accessor(reviewString, [values]);
};

module.exports.propertySeeder = function() {
  var reviewAccumulator = function(property) {
    var propertyName = '';
    var combinedScore = 0;
    var cleanArray = [];
    var commArray = [];
    var checkArray = [];
    var accArray = [];
    var locArray = [];
    var valArray = [];
    var numberOfReviews = 0;

    db.accessor(`select * FROM reviews where property_name = "${property.property_name}";`)
      .then((singleProperty) => {
        propertyName = singleProperty[0].property_name;
        for (let review = 0; review < singleProperty.length; review++) {
          numberOfReviews++;
          cleanArray.push(singleProperty[review].cleanliness);
          commArray.push(singleProperty[review].communication);
          checkArray.push(singleProperty[review].check_in);
          accArray.push(singleProperty[review].accuracy);
          locArray.push(singleProperty[review].location);
          valArray.push(singleProperty[review].value);
        }

        var mean = function(array) {
          var average = 0;
          for (let index = 0; index < array.length; index++) {
            average += array[index];
          }
          var average = average / array.length;
          return average;
        };

        var cleanScore = mean(cleanArray);
        var commScore = mean(commArray);
        var checkScore = mean(checkArray);
        var accScore = mean(accArray);
        var locScore = mean(locArray);
        var valScore = mean(valArray);
        var combinedArr = [cleanScore, commScore, checkScore, accScore, locScore, valScore];
        combinedScore = mean(combinedArr);
        var propertyComposite = [propertyName, `${combinedScore}`, `${cleanScore}`, `${commScore}`, `${checkScore}`, `${accScore}`, `${locScore}`, `${valScore}`, `${numberOfReviews}`];
        db.accessor('REPLACE INTO property (property_name, combined_aggregate, cleanliness_aggregate, communication_aggregate, check_in_aggregate, accuracy_aggregate, location_aggregate, value_aggregate, number_of_reviews) VALUES (?);', [propertyComposite]);
      });
  };

  db.accessor('SELECT property_name FROM reviews;')
    .then((properties) => {
      for (let currentProp = 0; currentProp < properties.length; currentProp++) {
        reviewAccumulator(properties[currentProp]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.userSeeder = function() {
  db.accessor('SELECT user FROM reviews')
    .then((allUsers) => {
      for (let currentUser = 0; currentUser < allUsers.length; currentUser++) {
        var name = stringMaker(1);
        var picNumber = randomScore(1, 5);
        var picUrl = `"https://airbeeandbeereviews.s3-us-west-1.amazonaws.com/review+user+images/userPic${picNumber}.jpg"`;
        db.accessor(`REPLACE INTO users (user_id, user_name, user_image_url) VALUES ("${allUsers[currentUser].user}", "${name}", ${picUrl});`);
      }
    });
};

module.exports.masterSeed = function() {
  for (let seed = 0; seed < 50; seed++) {
    module.exports.reviewSeeder();
  }
  module.exports.propertySeeder();
  module.exports.userSeeder();
};
module.exports.masterSeed();