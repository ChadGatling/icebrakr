const express = require("express");
const path = require("path");

const router = require("express").Router();
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets
app.use(express.static("client/build"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../icebrakr/client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
  