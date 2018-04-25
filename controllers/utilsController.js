const db = require("../models");

module.exports = {
	session: (req, res) => {
		// console.log("Session hit", req.session);
	},
	// Log in a user
	logIn: (req, res) => {
		console.log("Login", req.body);
		db.User
			.findOne({username: req.body.username}, {"username": 1, "password": 1})
			.then(dbModel => {
				console.log("dbModel", dbModel);
				res.send(dbModel)
			})
			.catch(err => {
			res.status(422).json(err)
		});
	}
}