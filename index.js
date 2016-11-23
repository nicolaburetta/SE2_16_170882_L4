// index.js
// load the things we need
var express = require('express');
var app = express();

// my data
var emp = require('./models/data.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set scripts directory
app.use('/script', express.static(__dirname + '/public/js'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  res.render('pages/index', {
    emp: {},
    display: ''
  });
});

// about page 
app.get('/SearchDelete', function(req, res) {
  if (req.query.action == 'search') {
    var e = emp.get(req.query.id);

    res.render('pages/index', {
      emp: e,
      display: 'block'
    });
  } else if (req.query.action == 'delete') {
    var e = emp.get(req.query.id);
    emp.delete(req.query.id);
    
    res.render('pages/index', {
      emp: e,
      display: ''
    });
  }
});

app.get('/AddUpdate', function(req, res) {
  emp.add(req.query.id,
         req.query.name,
         req.query.surname,
         req.query.level,
         req.query.salary);
  
  res.render('pages/index', {
    emp: {},
    display: ''
  });
})

app.listen(8080);
console.log('Server running at port 8080');