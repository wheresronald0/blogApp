var express = require("express");
var app = express();
var request = require("request");
var mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); //use all the time cut paste
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb://localhost/blogApp",
  { useNewUrlParser: true }
);

var blogSchema = mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: Date
});

var Blog = mongoose.model("blog", blogSchema);

app.listen(4000, function() {
  console.log("Blog server is fired up!!");
});
