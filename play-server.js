require('dotenv').config();
require('./handlers/dataConnector.js').connect();

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const passport = require('passport');
const helper = require('./scripts/helpers.js');

// use cors middleware
app.use(cors());

// Express session
app.use(cookieParser('oreos'));
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use express flash, which will be used for passing messages
app.use(flash());

// set up the passport authentication
require('./scripts/auth.js');

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// get our data model
const Play = require('./models/Play.js');
const User = require('./models/User.js');

// tell node to use json and HTTP header features in body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use the route handlers
const playRouter = require('./handlers/playRouter.js');
const userRouter = require('./handlers/userRouter.js');
playRouter.handleAllPlays(app, Play);
playRouter.handleSinglePlay(app, Play);
userRouter.handleSingleUser(app, User);

// serves up static files from the build folder
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', helper.ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//app.get('/user', helper.ensureAuthenticated, (req, res) => {
//    res.json(req.user);
//});

app.get('/login', (req, res) => {
    res.render('login.ejs', {message: req.flash('error')} );
});

app.post('/login', async (req, resp, next) => {
    // use passport authentication to see if valid login
    passport.authenticate('localLogin', { 
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true 
    })(req, resp, next);
});

app.get('/logout', (req, resp) => {
    req.logout();
    req.flash('info', 'You were logged out');
    resp.render('login', {message: req.flash('info')} );
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});