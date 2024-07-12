const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/public',express.static('./public'));

app.get("/time", function(req, res){
  const d = new Date();
  let options = { hour: 'numeric', minute: '2-digit', hour12: true }; // Display hour and minute in AM/PM format
  let time = d.toLocaleTimeString('en-US', options); // Get current time as a string with hour and minute
  res.send(time); // Send the time as response
});

app.get("/", function(req, res){
  const d = new Date();
  let year = d.getFullYear();
res.render("home",{year:year});
});
app.get("/home", function(req, res){
  const d = new Date();
  let year = d.getFullYear();
  res.render("home",{year:year});
});



app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
