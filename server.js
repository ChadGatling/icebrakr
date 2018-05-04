const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const validator = require("express-validator");

const router = require("express").Router();
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Session
app.use(session({ 
	secret: 'whatsupchickenbutt',
	resave: false,
	saveUninitialized: true, 
	cookie: { maxAge: 1000 * 60 * 10 }
}));

// Validator
app.use(validator());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/iceBrakr"
);

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
  