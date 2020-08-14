const db = require('../models/pgModel');
const markdownParser = require('./markdownParser.js');

const textController = {};

textController.parseMarkdown = (req, res, next) => {
  // TODO: Add author when login complete
  const { title, body } = req.body;
  const text = markdownParser(body);
  
  res.locals.newText = { title, text };

  next();
};

textController.storeNewText = (req, res, next) => {
  const textElements = [ Number(req.cookies.id), res.locals.newText.title, JSON.stringify(res.locals.newText.text) ];
  const pgQuery = 
    `INSERT INTO texts (author_id, title, text)
    VALUES ($1, $2, $3)
    RETURNING *;`;
  
  db.query(pgQuery, textElements)
    .then(queryResponse => { res.locals.storedText = queryResponse.rows[0]; next(); })
    .catch(error => { console.log(error); next(error); });
 
};

textController.getTexts = (req, res, next) => {
	const pgQuery = 
		`SELECT title, _id
		FROM texts;`
	
	db.query(pgQuery)
	  .then(queryResponse => {res.locals.textList = queryResponse.rows; next(); });
};

textController.getTextContent = (req, res, next) => {
	const pgQuery = 
		`SELECT *
		FROM texts
		WHERE _id=$1;`
	
	
	db.query(pgQuery, [ req.params.textId ])
	  .then(queryResponse => { 
			const parsedText = JSON.parse(queryResponse.rows[0].text);
			res.locals.textContent = queryResponse.rows[0];
			res.locals.textContent.text = parsedText;
			next(); });
};

textController.addCard = (req, res, next) => {
	const { text_id, question, answer, position } = req.body;
	const newCardValues = [text_id, question, answer, position];
	const pgQuery = 
	`INSERT INTO cards (text_id, question, answer, position)
	VALUES ($1, $2, $3, $4)
	RETURNING *;`;

	db.query(pgQuery, newCardValues)
		.then((queryResponse) => {
		res.locals.newCard = queryResponse.rows[0];
		next();
	});
};

textController.getCards = (req, res, next) => {
	const pgQuery = 
	 `SELECT *
	 FROM cards
	 WHERE text_id=$1;`;

	 db.query(pgQuery, [ req.params.textId ])
	   .then(queryResponse => {
			 console.log(queryResponse.rows);
			 res.locals.cards = queryResponse.rows;
			 next();
		 });
}

module.exports = textController;