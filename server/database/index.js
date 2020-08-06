var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'Alex',
  password: 'Alex',
  database: 'review_data'
});
connection.connect();
