const db = require("../models");
// const bcrypt = require("bcrypt");

module.exports = {
	session: (req, res) => {
		// console.log("Session hit", req.session);
	},
	// Log in a user
	logIn: (req, res) => {
		console.log("Login", req.body);
		db.User
			.findOne({username: req.body.username}, "password")
			.then(dbModel => {
				// console.log("dbModel", dbModel);
				if (dbModel) {
					if (dbModel.password === req.body.password) {
						console.log("Session", req.session);
						req.session._id = dbModel._id;
						console.log("Session", req.session);
						res.send("granted")
					} else {
						res.send("Password incorrect.")
					}
				} else {
					res.send("Username incorrect.")
				}
			})
			.catch(err => {
				res.status(422).json(err)
		});
	}
}