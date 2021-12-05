// uses passport authentication to check if authentication is
// needed at some point in middleware pipeline.
function ensureAuthenticated (req, resp, next) {
    console.log(req)
//    if (req.isAuthenticated()) {
//        return next();
//    }
    
    req.flash('info', 'Please log in to view that resource');
    resp.render('login.ejs', {message: req.flash('info')} );
}
module.exports = { ensureAuthenticated };