module.exports = (app) => {
    app.get('/api/person/:id', (req, res) => {
        // get that data from database
        res.render('person', { id: req.params.id, Qstr: req.query.qstr });
    });
    
    app.post('/api/person', (req, res) => {
        // save to the database
    });
    
    app.delete('/api/person/:id', (req, res) => {
        // delete from the database
    });
};