//include modules
var express         = require('express');
var session         = require('cookie-session');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var passport        = require('passport');
var fs              = require('fs');
var cors            = require('cors');
require('./auth/auth')(passport);
var methodOverride = require('method-override');

//initialize app
var app = express();

var whitelist = [
  'http://localhost:3000',
  'https://shared-movie.herokuapp.com'
]

var corsOptions = {
  origin: function (origin, callback) {
    console.log('origin', origin);
    if (process.env.NODE_ENV == 'development' || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//call use module
app.use(cors(corsOptions));
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