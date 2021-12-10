// uses passport authentication to check if authentication is
// needed at some point in middleware pipeline.
function ensureAuthenticated (req, res, next) {
    if (req.isAuthenticated()) {
        console.log("is authenticated");
        return next();
    }
    else {
        console.log("is NOT authenticated");
        req.flash('info', 'Please log in to view that resource');
        res.render('login', {message: req.flash('info')} );
    }
}
module.exports = { ensureAuthenticated };