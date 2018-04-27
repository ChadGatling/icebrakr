const db = require("../models");
// const bcrypt = require("bcrypt");

module.exports = {
	session: (req, res) => {
        // console.log("Session", req.session);
        if (req.session) {
            db.User
                .findById(req.session.userId, "-password")
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        } else {
            res.json("No req.session._id");
        }
    },
	// Log in a user
	logIn: (req, res) => {
		// console.log("Login", req.body);
		db.User
			.findOne({username: req.body.username}, "password")
			.then(dbModel => {
				// console.log("dbModel", dbModel);
				if (dbModel) {
					if (dbModel.password === req.body.password) {
						req.session._id = dbModel._id;
						res.send("granted")
					} else {
						res.send("password")
					}
				} else {
					res.send("username")
				}
			})
			.catch(err => {
				res.status(422).json(err)
		});
	}
}