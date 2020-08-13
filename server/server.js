var express = require('express');
var db = require('./database/index.js');
var App = express();
var seeder = require('./database/dbSeeder.js');

App.use(express.static(__dirname + '/..' + '/public'));
App.use(express.json());

// get review scores for a specific property
App.get('/propertyScores/:propertyName', (req, res) => {
  var requestedProperty = req.params.propertyName;
  db.propertyScoreQuery(requestedProperty)
    .then((data) => {
      res.send(200, data);
    });
});

// get all reviews for a specific property
App.get('/propertyReviews/:propertyName', (req, res) => {
  var requestedProperty = req.params.propertyName;
  db.propertyReviewsQuery(requestedProperty)
    .then((data) => {
      res.send(200, data);
    });
});

// get all users for a specific property
App.get('/userInfo/:userIds', (req, res) => {
  var usersArray = [];
  var reqData = req.params.userIds.split(',');
  console.log('reqData: ', reqData);
  for (let user = 0; user < reqData.length; user++) {
    console.log('each entry: ', reqData[user]);
    usersArray.push(Number(reqData[user]));
  }
  console.log('usersArray', usersArray);
  Promise.all(usersArray.map((idNumber) => {
    return db.userInfoQuery(idNumber)
      .catch((err) => {
        return err;
      });
  }))
    .then((data) => {
      res.send(200, data);
    })
    .catch((err) => {
      console.log(err);
    });
});

App.listen(1215, () => console.log('listening on port 1215'));
