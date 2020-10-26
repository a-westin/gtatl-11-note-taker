// Requiring dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Creating a port, setting up express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Starting the server
app.listen(PORT, function () {
  console.log(`Listening on Port: ${PORT}`);
});

// Getting index.html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Getting notes.html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// Getting the db.json file
app.get("/api/notes", function (req, res) {
  return res.sendFile(path.join(__dirname, "db/db.json"));
});
