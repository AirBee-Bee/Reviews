var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'Alex',
  password: 'Alex',
  database: 'review_data'
});
connection.connect();

module.exports.accessor = function(queryString, queryArgs, callback) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, queryArgs, (err, res) => {
      if (err) {
        console.log(err.message);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  })
    .catch((err) => {
      console.log('db access error');
    });
};