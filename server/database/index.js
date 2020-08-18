var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'Alex',
  password: 'Alex',
  database: 'review_data'
});
connection.connect();

var accessor = function(queryString, queryArgs) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, queryArgs, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
    .catch((err) => {
      console.log('db access error');
    });
};

module.exports.reviewSeedQuery = function(values) {
  var reviewString = 'INSERT INTO REVIEWS (cleanliness, communication, check_in, accuracy, location, value, property_name, user, date, review_text) VALUES (?);';
  return accessor(reviewString, [values]);
};

module.exports.propertySeedQuery = function(propertyName) {
  var propertyString = `select * FROM reviews where property_name = "${propertyName}";`;
  return accessor(propertyString);
};

module.exports.scoreUpdateQuery = function(propertyComposite) {
  return accessor('REPLACE INTO property (property_name, combined_aggregate, cleanliness_aggregate, communication_aggregate, check_in_aggregate, accuracy_aggregate, location_aggregate, value_aggregate, number_of_reviews) VALUES (?);', [propertyComposite]);
};

module.exports.allPropertiesQuery = function() {
  return accessor('SELECT property_name FROM reviews;');
};

module.exports.allUsersQuery = function() {
  return accessor('SELECT user FROM reviews');
};

module.exports.updateUsersQuery = function(user, name, url) {
  return accessor(`REPLACE INTO users (user_id, user_name, user_image_url) VALUES ("${user}", "${name}", ${url});`);
};

module.exports.propertyScoreQuery = function(requestedId) {
  return accessor(`select * from property limit ${requestedId},1;`);
};

module.exports.propertyNameQuery = function(requestedId) {
  return accessor(`select property_name from property limit ${requestedId},1;`);
};

module.exports.propertyReviewsQuery = function(requestedProperty) {
  return accessor(`SELECT * FROM reviews WHERE property_name = "${requestedProperty}" ORDER BY date DESC;`);
};

module.exports.userInfoQuery = function(idNumber) {
  return accessor(`SELECT * FROM users WHERE user_id = "${idNumber}";`);
};
