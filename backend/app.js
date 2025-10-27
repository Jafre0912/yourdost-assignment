const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');

// Middleware
app.use(express.json());

// Main route
app.use('/todos', todoRoutes); // All routes starting with /todos will go to todo.routes.js

// A simple base route
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API');
});

module.exports = app; // Export the app for index.js to use
