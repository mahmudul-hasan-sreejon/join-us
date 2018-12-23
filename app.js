
const mysql = require("mysql");
const faker = require("faker");

// connecting to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "join_us_app"
});

// selecting user's data from the database
// const sqlString = "SELECT COUNT(*) AS total_users FROM users";
// connection.query(sqlString, function(error, results, fields) {
//     if(error) throw error;
//     console.log(results[0].total_users);
// });
// connection.end();

// inserting a single user in the database
// let person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
// connection.query("INSERT INTO users SET ?", person, function(error, results, fields) {
//     if(error) throw error;
//     console.log(results);
// });
// connection.end();

// bulk inserting users in the database
let user_data = [];
for(let i = 1; i <= 500; ++i) user_data.push([faker.internet.email(), faker.date.past()]);

const sqlString = "INSERT INTO users(email, created_at) VALUES ?";
connection.query(sqlString, [user_data], function(error, results, fields) {
    if(error) throw error;
    console.log(results);
});
connection.end();