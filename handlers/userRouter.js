const helper = require('../scripts/helpers.js');

const handleSingleUser = (app, User) => {
    app.get('/api/user/:id', helper.ensureAuthenticated, (req,resp) => {
            User.find({id: req.params.id})
                .select('id details picture membership email')
                .exec((err, data) => {
                    if (err) {
                        resp.json({ message: 'User not found' });
                    } else {
                        resp.json(data);
                    }
                });
        });
};

module.exports = {
    handleSingleUser
}