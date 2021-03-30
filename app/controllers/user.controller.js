const connection = require('../models/user.model.js');

// home page
exports.home = (req, res) => {
	const sqlString = 'SELECT COUNT(*) AS total_users FROM users';
	connection.query(sqlString, (err, results) => {
		if (err) {
			res.status(500).render('error', { message: err.message || 'Some error occurred while counting users.' });
		}

		const total_users = results[0].total_users;
		res.status(200).render('home', { count: total_users });
	});
};

// register page
exports.register = (req, res) => {
	const person = {
		email: req.body.email
	};

	if (!person.email) {
		res.status(500).render('error', { message: `Email address can't be blank.` });
	} else {
		connection.query('INSERT INTO users SET ?', person, (err) => {
			if (err) {
				res
					.status(500)
					.render('error', { message: err.message || 'Some error occurred while inserting new user.' });
			}

			res.status(200).render('register');
		});
	}
};
