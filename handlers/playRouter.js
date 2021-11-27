const helper = require('../scripts/helpers.js');

// handle GET requests for [domain]/api/books - return all books
const handleAllPlays = (app, Play) => {
    app.get('/api/list', helper.ensureAuthenticated, (req,resp) => {
            // use mongoose to retrieve all books from Mongo
            Play.find()
                .select('-playText')
                .exec((err, data) => {
                    if (err) {
                        resp.json({ message: 'Unable to connect to plays' });
                    } else {
                        // return JSON retrieved by Mongo as response
                        resp.json(data);
                    }
                });
        });
};

// handle requests for specific book: e.g., /api/books/0321886518
const handleSinglePlay = (app, Play) => {
    app.get('/api/play/:id', helper.ensureAuthenticated, (req,resp) => {
            Play.find({id: req.params.id}, (err, data) => {
                if (err) {
                    resp.json({ message: 'Play not found' });
                } else {
                    resp.json(data);
                }
            });
        });
};

module.exports = {
    handleAllPlays,
    handleSinglePlay
};