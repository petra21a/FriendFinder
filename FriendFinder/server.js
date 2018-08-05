//require dotenv
require("dotenv").config();

// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");



// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

//MySQL connection - using .env file
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
  
    // Your port; if not 3306 (default in documentation)
    port: process.env.MYSQL_PORT,
  
    // Your username
    user: process.env.MYSQL_USER,
  
    // Your password
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
  });

  // Sets up the Express app to handle data parsing
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});