var express = require('express');
var db = require('./database/index.js');
var App = express();
var seeder = require('./database/dbSeeder.js');

App.use(express.static(__dirname + '/..' + '/client'));
App.use(express.json());

// get review scores for a specific property
App.get('/propertyScores', (req, res) => {
  console.log(req.body.propertyName);
  var requestedProperty = req.body.propertyName;
  db.accessor(`SELECT * FROM property WHERE property_name = "${requestedProperty}";`)
    .then((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(200, data);
      }
    });
});

// get all reviews for a specific property
App.get('/propertyReviews', (req, res) => {
  console.log(req.body.propertyName);
  var requestedProperty = req.body.propertyName;
  db.accessor(`SELECT * FROM reviews WHERE property_name = "${requestedProperty}" ORDER BY date DESC;`)
    .then((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(200, data);
      }
    });
});

// get all users for a specific property
App.get('/userInfo', (req, res) => {
  var usersArray = [];
  for (let user in req.body.userIds) {
    usersArray.push(Number(req.body.userIds[user].userId));
  }
  Promise.all(usersArray.map((idNumber) => {
    return db.accessor(`SELECT * FROM users WHERE user_id = "${idNumber}";`)
      .catch((err) => {
        return err;
      });
  }))
    .then((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(200, data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

App.listen(1215, () => console.log('listening on port 1215'));
