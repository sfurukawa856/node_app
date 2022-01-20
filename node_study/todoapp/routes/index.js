const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xxxxxxxxxxxx',
	database: 'todo_app'
});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
	connection.connect((err) => {
		if (err) {
			console.log('error connecting: ' + err.stack);
			return
		}
		console.log('success');
	});

	const todo = req.body.add;
	todos.push(todo);
	res.redirect('/');
});

module.exports = router;
