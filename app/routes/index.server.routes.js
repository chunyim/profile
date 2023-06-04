/*
 * File: index.server.routes.js
 * Student: Chun Hin Yim
 * StudentID: 301255702
 * Date: 3.6.2023
 * Description: This file defines the routes for the application.
 */

var express = require('express');
var router = express.Router();

// Home route
router.get('/', function(req, res, next) {
  // Get the submittedFirstName query parameter from the request
  var submittedFirstName = req.query.submittedFirstName || ''; 

  // Render the 'index' template with the provided data
  res.render('index', { title: 'Home', submittedFirstName: submittedFirstName });
});

// About route
router.get('/about', function(req, res, next) {
  // Render the 'about' template with the provided data
  res.render('about', { title: 'About' });
});

// Projects route
router.get('/projects', function(req, res, next) {
  // Render the 'projects' template with the provided data
  res.render('projects', { title: 'Projects' });
});

// Contact route
router.get('/contact', function(req, res, next) {
  // Render the 'contact' template with the provided data
  res.render('contact', { title: 'Contact'});
});

// Services route
router.get('/services', function(req, res, next) {
  // Render the 'services' template with the provided data
  res.render('services', { title: 'Services' });
});

// Form submission route
router.post('/', function(req, res, next) {
  // Get the firstName field from the request body
  const firstName = req.body.firstName;

  // Redirect to the home route with the submittedFirstName query parameter
  res.redirect('/?submittedFirstName=' + encodeURIComponent(firstName));
});

// Export the router as a module
module.exports = router;

