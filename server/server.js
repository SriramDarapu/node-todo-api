var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

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
            res.status(400).send(err);
        }
    )
});

app.get('/todos', (req, res) => {
    Todo.find().then(
        (todos) => {
            res.send({todos});
        },(err) => {
            res.status(400).send(err);
        }
    )
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    Todo.findById(id).then(
        (result) => {
            if(!res) {
                res.status(404).send('Todo not found');
            }
            res.send(JSON.stringify(result, undefined, 2));
        },
        (err) => {
            res.status(400).send();
        }
    )
});

app.listen(5000, () => {
    console.log('Server started at 5000');
});
