var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "big hill", image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_960_720.jpg"},
        {name: "small hill", image: "https://www.campcheerio.org/images/home-slides/IMG_3046_revised.jpg"},
        {name: "my hill", image: "http://www.rapidfitkc.com/wp-content/uploads/2017/09/Best-Boot-Camp-in-Kansas-city.jpg"}
    ]
    res.render("campgrounds");
});






app.listen(3000, function(){
    console.log('server on port 3000');
});