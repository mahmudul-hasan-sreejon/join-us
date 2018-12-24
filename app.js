
const express = require("express");
const mysql = require("mysql");

const app = express();

// connecting to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "join_us_app"
});

app.get("/", function(req, res) {
    const sqlString = "SELECT COUNT(*) AS total_users FROM users";
    connection.query(sqlString, function(err, results) {
        if(err) throw err;
        const total_users = results[0].total_users;
        res.send("We have " + String(total_users) + " users.");
    });
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