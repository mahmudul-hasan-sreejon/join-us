const mysql = require('mysql');

// getting configuration for the database
const dbConfig = require('../../config/database.config.js');

// connecting to the database
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
	// checking connection status
	if (err) {
		console.log('Could not connect to the database. Exiting now...\n', err);
		process.exit();
	}
	console.log('Successfully connected to the database.\n');
});

module.exports = connection;
