const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/iceBrakr"
);

const userSeed = [
	{
		access: "test",
		email: "test@test.com",
		firstName: "TestFirst",
		lastName: "TestLast",
		password: "TestPass",
		username: "TestUser"
	},
	{
		access: "admin",
		email: "ewendel88@gmail.com",
		firstName: "Elliott",
		lastName: "Wendel",
		password: "password",
		username: "ewendel88"
	}
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});