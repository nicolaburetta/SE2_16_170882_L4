// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page 
app.get('/search', function(req, res) {
  console.log(req.query.id);
  res.render('pages/index');
});

app.listen(8080);
console.log('Server running at port 8080');