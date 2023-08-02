require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./config/dbConnection');
const path = require('path');

// Connect to the database
connectToDatabase();

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname)));

// Middleware to parse JSON data in the request body
app.use(express.json());

// Serve handleFunction.js to the client
app.get('/handleFunction.js', (req, res) => {
  res.sendFile(__dirname + '/handleFunction.js');
});

// Start the server
const port = process.env.PORT || 8000;
const hostname = '127.0.0.1';
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
