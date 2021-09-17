//include modules
var express         = require('express');
var session         = require('express-session');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var fs              = require('fs');
require('./auth/auth')(passport);
var methodOverride = require('method-override');

//initialize app
var app = express();

//call use module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '@a#b$c%d^e&f*',
    resave: true,
    saveUninitialized: true
}));

//core config
require('../core/api/apiFilter')(app);
require('../core/api/routeConfig')(app);
require('../core/domain/errorHandle')(app);

module.exports = app;