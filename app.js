var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "big hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMI6FwL-HFdQFSWBWOwvQMAlBnJXpNIZIUTrmRp2J2TRrOT9L5w"},
        {name: "small hill", image: "https://www.tourpackagejaisalmer.com/images/desert-night-camp.png"},
        {name: "my hill", image: "http://www.rapidfitkc.com/wp-content/uploads/2017/09/Best-Boot-Camp-in-Kansas-city.jpg"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("post route")
})




app.listen(3000, function(){
    console.log('server on port 3000');
});