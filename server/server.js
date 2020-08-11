// Import libraries
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Create Express server instance
const app = express();

// Handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve main app: build(=dist) folder and html
app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;