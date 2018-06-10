var Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        // seed database
        var starterTodos = [
            {
                username: 'user',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            },
        ];

        Todos.create(starterTodos, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });
};