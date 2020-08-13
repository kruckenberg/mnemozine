// Import libraries
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Import Controllers
const textController = require('./controllers/textController.js');
const userController = require('./controllers/userController.js');

// Create Express server instance
const app = express();

// Handle parsing request body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/getTexts', textController.getTexts, (req, res, next) => {
  res.json(res.locals.textList);
})

app.post('/newText', textController.parseMarkdown, textController.storeNewText, (req, res, next) => { 
  res.sendStatus(200);
});

app.post('/login', userController.validateUser, userController.setSession, (req, res, next) => {
  res.cookie('id', res.locals.user._id);
  res.status(200).json(res.locals.user);
});

app.post('/signup', userController.createUser, userController.setSession, (req, res, next) => {
  res.cookie('id', res.locals.user._id);
  res.status(200).json(res.locals.newUser);
})

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