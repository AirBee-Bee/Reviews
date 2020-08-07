var db = require('./index.js');

var stringMaker = function(stringLength) {
  var words = ['this', 'property', 'great', 'has', 'view', 'amenities', 'awesome', 'cotttage', 'close', 'check-in', 'termites', 'pool'];
  var randomString = '';
  for (let word = 0; word < stringLength; word++) {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    randomString += `${randomWord} `;
  }
  return randomString;
};

var randomScore = function(min, max) {
  var random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

module.exports.reviewSeeder = function() {
  var content = stringMaker(20);
  var cleanliness = randomScore(0, 5);
  var communication = randomScore(0, 5);
  var check_in = randomScore(0, 5);
  var accuracy = randomScore(0, 5);
  var location = randomScore(0, 5);
  var value = randomScore(0, 5);
  var property_name = stringMaker(3);
  var user = randomScore(0, 20);
  var date = `${randomScore(2015, 2020)}-${randomScore(10, 12)}-${randomScore(10, 28)}`;
  var review_text = stringMaker(10);

  var values = [`${cleanliness}`, `${communication}`, `${check_in}`, `${accuracy}`, `${location}`, `${value}`, property_name, user, `${date}`, review_text];

  var reviewString = 'INSERT INTO REVIEWS (cleanliness, communication, check_in, accuracy, location, value, property_name, user, date, review_text) VALUES (?)';

  console.log(`values: ${values}`);
  db.accessor(reviewString, [values]);
};