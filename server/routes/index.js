var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// const sqlite = require('sqlite3').verbose();

// const db = new sqlite.Database('./chinook.sqlite', err => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Yay! You are connected to the database');
// });

// const query = `SELECT * from artists LIMIT 10`;

// db.all(query, (err, row) => {
//   if (err) throw err;
//   console.log(row);
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/person/:id', function(req, res, next) {
//   //get object that matches the id
//   let person = users.people.find(peep => {
//     return peep.id === parseInt(req.params.id);
//   });
//   // render the template with that object
//   res.render('index', { person });
//   console.log(req.url);
// });
// module.exports = router;
