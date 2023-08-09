const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/public/images/',express.static('./public/images'));


app.get("/", function(req, res){
  res.render("home");
});
app.get("/home", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("#about");
});
app.get("/skills", function(req, res){
  res.render("skills");
});
app.get("/pages", function(req, res){
  res.render("pages");
});
app.get("/cv", function(req, res){
  res.redirect(301,'https://harshkrsingh05.github.io/CV/');
});
app.get("/contact", function(req, res){
  res.redirect(301,'https://harshkrsingh05.github.io/about-me-website/');
});




app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
