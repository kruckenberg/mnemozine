const markdownParser = require('./markdownParser.js');

const newTextController = {};

newTextController.parseMarkdown = (req, res, next) => {
  // TODO: Add author when login complete
  const { title, body } = req.body;
  const text = markdownParser(body);
  
  res.locals.newText = { title, text };

  next();
};

newTextController.storeNewText = (req, res, next) => {
  // send text object (on res.locals) to elephantsql with appropriate sql query
};

module.exports = newTextController;