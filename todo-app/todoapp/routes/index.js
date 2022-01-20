const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Oh21668947@!',
	database: 'todo_app'
});

let todos = [];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Todo App',
		todos: todos,
	});
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
