const express = require('express');
const app = express();

// Import Routes
const ListRoute = require('./Routes/ListRoute'); 

// Middleware
app.use(express.json());


// Routes Middlewares
app.use('/', ListRoute);


module.exports = app;




