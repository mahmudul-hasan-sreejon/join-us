
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express(); // create express app

app.set("view engine", "ejs"); // set default view engine to ejs
app.use(bodyParser.urlencoded({extended: true})); // parse requests of content-type
app.use(express.static(__dirname + "/public")); // make public directory accessible to views

// Configuring the database
const dbConfig = require('./config/database.config.js');

// connecting to the database
const connection = mysql.createConnection(dbConfig);


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


// Port mapping
const port = process.env.PORT || 8080;
// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}...`));