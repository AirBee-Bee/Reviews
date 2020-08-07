var express = require('express');
var db = require('./database/index.js');
var App = express();
var seeder = require('./database/dbSeeder.js');
seeder.reviewSeeder();
App.use(express.static(__dirname + '/..' + '/client'));
App.listen(1215, () => console.log('listening on port 1215'));