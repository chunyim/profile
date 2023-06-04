/*
 * File: express.js
 * Student: Chun Hin Yim
 * StudentID: 301255702
 * Date: 3.6.2023
 */

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    // Create Express app
    var app = express();

    // Configure middleware based on environment
    if (process.env.NODE_ENV === 'development') {
        // Use morgan logger in development mode
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        // Use compression middleware in production mode
        app.use(compress());
    }

    // Parse request bodies and enable method overriding
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Set the directory path where the views (templates) are stored
    app.set('views', './app/views');

    // Set the default view engine for the Express application to "EJS"
    app.set('view engine', 'ejs');

    // Set up routes
    app.use('/', require('../app/routes/index.server.routes.js'));

    // Serve static files from the public directory
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    // Return the Express app
    return app;
}
