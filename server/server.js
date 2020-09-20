var express = require('express');
var db = require('./database/index.js');
var App = express();
var path = require('path');
var cors = require('cors');

App.get('/public/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: path.join(__dirname, '../public') });
});
App.get('/property/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});
App.use(express.json());
App.use(cors());

// get review scores for a specific property
App.get('/propertyScores/:listingId', (req, res) => {
  var requestedId = req.params.listingId;
  db.propertyScoreQuery(requestedId)
    .then((data) => {
      res.send(200, data);
    });
});

// get all reviews for a specific property
App.get('/propertyReviews/:listingId', (req, res) => {
  var requestedId = req.params.listingId;
  db.propertyNameQuery(requestedId)
    .then((requestedProperty) => {
      return db.propertyReviewsQuery(requestedProperty[0].property_name);
    })
    .then((data) => {
      res.send(200, data);
    });
});

// get all users for a specific property
App.get('/userInfo/:userIds', (req, res) => {
  var usersArray = [];
  var reqData = req.params.userIds.split(',');
  for (let user = 0; user < reqData.length; user++) {
    usersArray.push(Number(reqData[user]));
  }

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
