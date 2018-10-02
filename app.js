var express = require("express");
var app = express();
var request = require("request");
var mongoose = require("mongoose");

//App Config//
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); //use all the time cut paste
app.use(express.static("public"));
app.set("view engine", "ejs");

//Mongoose Model Config//
mongoose.connect(
  "mongodb://localhost/blogApp",
  { useNewUrlParser: true }
);

var blogSchema = mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now } //default language
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "test blog",
//   image:
//     "https://images.pexels.com/photos/7316/food-purple-chocolate-dessert.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
//   body: "test tex about the body of this test blog post"
// });

//Routes//
app.get("/", function(req, res) {
  res.redirect("/blogs");
});

//INDEX ROUTE//
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log("error!");
    } else {
      res.render("index", { blogs: blogs });
    }
  });
});

//NEW ROUTE
app.get("/new", function(req, res) {
  res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res) {
  //create blog
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      res.render("new");
    } else {
      //then redirect to the index page
      res.redirect("/blogs");
    }
  });
});

// //SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.render("show", { blog: foundBlog });
    }
  });
});

app.listen(4000, function() {
  console.log("Blog server is fired up!!");
});

// <a href="/blogs/<%= blog._id%>">Read More</a>
