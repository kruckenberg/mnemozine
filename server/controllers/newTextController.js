const db = require('../models/pgModel');
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
  const textElements = [ Number(req.cookies.id), res.locals.newText.title, JSON.stringify(res.locals.newText.text) ];
  const pgQuery = 
    `INSERT INTO texts (author_id, title, text)
    VALUES ($1, $2, $3)
    RETURNING *;`;
  
  db.query(pgQuery, textElements)
    .then(queryResponse => { res.locals.storedText = queryResponse.rows[0]; next(); })
    .catch(error => { console.log(error); next(error); });
 
};

module.exports = newTextController;