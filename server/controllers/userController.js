const db = require('../models/pgModel.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const newUserValues = [name, email, password];
  const pgQuery = 
    `INSERT INTO readers (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING _id, name;`;
  
  db.query(pgQuery, newUserValues)
    .then(queryResult => { res.locals.user = queryResult.rows[0]; next(); })
    .catch(error => { console.log(error); next(error); });

};

userController.validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const checkUserValues = [email, password];
  const pgQuery = 
    `SELECT *
    FROM readers
    WHERE email = $1 AND password = $2;`;

  db.query(pgQuery, checkUserValues)
    .then(queryResult => { res.locals.user = queryResult.rows[0]; next(); })
    .catch(error => { console.log(error); next(error); });

}

userController.setSession = (req, res, next) => {
  const date = new Date();
  const newSessionValues = [ res.locals.user._id, date.toLocaleDateString(), date.toLocaleTimeString() ];
  const pgQuery = 
    `INSERT INTO sessions (reader_id, date, time)
    VALUES ($1, $2, $3)
    RETURNING *;`;
  
  db.query(pgQuery, newSessionValues)
    .then(queryResult => { res.locals.session = queryResult.rows[0]; next(); })
    .catch(error => { console.log(error); next(error); })
}

module.exports = userController;