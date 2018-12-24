
const mysql = require("mysql");

// configuring the database
const dbConfig = require('../../config/database.config.js');

// connecting to the database
const connection = mysql.createConnection(dbConfig);

connection.connect(function(err) { // checking connection status
    if(err) {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    }
    console.log("Successfully connected to the database");
});

module.exports = connection;