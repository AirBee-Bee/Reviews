var express = require('express');
var App = express();
App.use(express.static(__dirname + '/..' + '/client'));
App.listen(1215, () => console.log('listening on port 1215'));