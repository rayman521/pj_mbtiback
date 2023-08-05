var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//get 예제
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
module.exports = app;
