/*
 * File: server.js
 * Student: Chun Hin Yim
 * StudentID: 301255702
 * Date: 3.6.2023
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Import the express module from the './config/express' file
var express = require('./config/express');
var app = express();

// Start the server and listen on port 3000
app.listen(3000);
module.exports = app;

// Log a message indicating that the server is running
console.log('Server running at http://localhost:3000/');
