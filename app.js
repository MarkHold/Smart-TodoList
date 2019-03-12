var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var toDoList = [
    "test One",
    "test Two"
];

// view engine setup
app.set('view engine', 'ejs');

//declare and use body parser in order to parse the information we send from the frontend
app.use(bodyParser.urlencoded({extended: true}));

// here we basically render and send objects to the front-end
app.get('/', function(req, res) {
  res.render("index.ejs", {toDoList: toDoList});
});

// and here we get things back, that are posted to us from the front-end
//This will also be the submit route.

app.post("/addToList", function(req, res){
  console.log("item subb");

  //now we get the information from the request
  var item = req.body.item;

  //and now we add them to the todolist
  toDoList.push(item);

  res.redirect("/");
});
module.exports = app;
