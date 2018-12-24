
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // setting default view engine to ejs
app.use(bodyParser.urlencoded({extended: true})); // make body-parser accessible request body elements
app.use(express.static(__dirname + "/public")); // make public directory accessible to views

// connecting to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "join_us_app"
});

// home page
app.get("/", function(req, res) {
    const sqlString = "SELECT COUNT(*) AS total_users FROM users";
    connection.query(sqlString, function(err, results) {
        if(err) throw err;

        const total_users = results[0].total_users;
        res.render("home", {count: total_users});
    });
});

// register page
app.post("/register", function(req, res) { // inserting a single user in the database
    let person = {
        email: req.body.email
    };
    connection.query("INSERT INTO users SET ?", person, function(err, results) {
        if(err) throw err;

        res.render("register");
        // res.redirect("/");
    });
});


app.get("/num", function(req, res) {
    let num = Math.floor(Math.random() * 10) + 1;
    res.send("The number is : " + num);
});


// Running node server
app.listen(8080, function() {
    console.log("Server running on 8080 port...");
});