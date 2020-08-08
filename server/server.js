var express = require('express');
var db = require('./database/index.js');
var App = express();
var seeder = require('./database/dbSeeder.js');

App.get('/properties', (req, res) => {
  db.accessor('SELECT * FROM property')
    .then((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(200, data);
      }
    });
});

App.use(express.static(__dirname + '/..' + '/client'));
App.listen(1215, () => console.log('listening on port 1215'));