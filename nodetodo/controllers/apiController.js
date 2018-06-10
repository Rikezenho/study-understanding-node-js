var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', (req, res) => {
         Todos.find({ username: req.params.uname }, (err, todos) => {
            if (err) throw err;

            res.send(todos);
         });
    });

    app.get('/api/todo/:id', (req, res) => {
         Todos.findById({ _id: req.params.id }, (err, todo) => {
            if (err) throw err;

            res.send(todo);
         });
    });

    app.get('/api/todos', (req, res) => {
         Todos.find({}, (err, todos) => {
            if (err) throw err;

            res.send(todos);
         });
    });

    app.post('/api/todo', (req, res) => {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (err, todo) => {
                if (err) throw err;

                res.send('Success');
            });
        } else {
            if (!req.body.todo) {
                res.send('Required fields are empty!');
            }

            var newTodo = Todos({
                username: req.body.username || 'user',
                todo: req.body.todo,
                isDone: req.body.isDone || false,
                hasAttachment: req.body.hasAttachment || false
            });
            
            newTodo.save((err) => {
                if (err) throw err;

                res.send('Success');
            });
        }
    });
    
    app.delete('/api/todo', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err) => {
           if (err) throw err;

           res.send('Success');
        });
   });
};