const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	access: {type: String, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required: true},
	username: {type: String, required: true, unique: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;