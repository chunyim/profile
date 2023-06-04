/*
 * File: app.js
 * Student: Chun Hin Yim
 * StudentID: 301255702
 * Date: 3.6.2023
 */

// Function to toggle between light and dark mode
function toggleDarkMode() {
  var body = document.querySelector('body');
  var footer = document.querySelector('footer');
  body.classList.toggle('light-mode');
  footer.classList.toggle('light-mode');

  // Store the mode preference in local storage
  var isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('darkMode', isLightMode);
}

// Check the stored mode preference on page load
window.addEventListener('DOMContentLoaded', function() {
  var isLightMode = localStorage.getItem('darkMode') === 'true';
  var body = document.querySelector('body');
  var footer = document.querySelector('footer');
  if (isLightMode) {
      body.classList.add('light-mode');
      footer.classList.add('light-mode');
  }
});

  