var express = require('express');
var app = express();

var toDoList = [
    "test One",
    "test Two"

];

// view engine setup
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index.ejs", {toDoList: toDoList});
});


module.exports = app;
