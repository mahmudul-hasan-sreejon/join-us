
const connection = require('../models/user.model.js');

// home page
exports.home = (req, res) => {
    const sqlString = "SELECT COUNT(*) AS total_users FROM users";
    connection.query(sqlString, (err, results) => {
        if(err) throw err;

        const total_users = results[0].total_users;
        res.render("home", {count: total_users});
    });
}

// register page
exports.register = (req, res) => {
    let person = {
        email: req.body.email
    };
    connection.query("INSERT INTO users SET ?", person, (err) => {
        if(err) throw err;

        res.render("register");
        // res.redirect("/");
    });
}