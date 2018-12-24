
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // created an express app

app.set("view engine", "ejs"); // set default view engine to ejs
app.use(bodyParser.urlencoded({extended: true})); // parse requests of content-type
app.use(express.static(__dirname + "/public")); // make public directory accessible to views


// require course routes
require('./app/routes/user.routes.js')(app);


// listen for requests
const port = process.env.PORT || 8080; // Port mapping
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});