
const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("HOME PAGE!!");
});

app.get("/joke", function(req, res) {
    res.send("Are you kidding me !?!");
});

app.get("/num", function(req, res) {
    let num = Math.floor(Math.random() * 10) + 1;
    res.send("The number is : " + num);
});

app.listen(8080, function() {
    console.log("Server running on 8080 port...");
});