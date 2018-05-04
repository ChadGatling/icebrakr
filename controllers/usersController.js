const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.User
			.find(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));	
	},
	create: (req, res) => {
		// console.log("Creating", req.body)
		db.User.find({username: req.body.username}, "-password").then(dbModel => {
			console.log("dbModel", dbModel)
			if (dbModel[0]) {
				res.send("username")
			} else {
				res.send("User would have been created.")
			}
		})
	},
	update: (req, res) => {

	},
	remove: (req, res) => {

	},
	findByInfo: (req, res) => {

	},
	uniqueUsername: (req, res) => {

		// convert to lowercase
		const casedUsername = req.params.id.toLowerCase() 

		// Return any users that match the username attempted
		db.User.find({username: casedUsername}, "username").then(dbModel => {
			console.log("dbModel", dbModel)

			// Is there is one already in database
			if (dbModel[0]) {
				res.send(false)
			} else {
				res.send(true)
			}
		})
	}
}