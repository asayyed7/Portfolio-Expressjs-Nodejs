const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname));
app.get("/", function(req, res){
    res.render("index");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("/project", function(req, res){
    res.render("project");
});
app.get("/services", function(req, res){
    res.render("services");
});
app.get("/skills", function(req, res){
    res.render("skills");
});
app.get("/teams", function(req, res){
    res.render("teams");
});
app.listen(3000, function(){
    console.log("server running at 3000");
});