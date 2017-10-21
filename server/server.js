var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then(
        (doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        }
    )
});

app.listen(5000, () => {
    console.log('Server started at 5000');
});
