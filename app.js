var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var sassMiddleware = require('node-sass-middleware');
var morgan = require('morgan');
var cors = require('cors');
var secure = require('express-force-https');

var index = require('./routes/index');
var users = require('./routes/users');
var testing = require('./routes/testing');
var utility = require('./routes/utils');

var app = express();

var firebaseApp = require('./plugins/firebase/firebase_app.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(secure);
app.use(favicon(path.join(__dirname, 'public', 'doge.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sid implementation
app.use(cookieParser());
app.use(session({
  secret: 'aGFua25ndXllbg0K',
  resave: false,
  saveUninitialized: true
}));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});


var callbackURL = 'https://dec31.azurewebsites.net/testing';
var Linkedin = require('node-linkedin')('77bprhhwzygdid', 'CkeX9rfc2BwEMAH6', callbackURL);
var scope = ['r_basicprofile'];
app.get('/oauth/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.auth.authorize(res, scope, 'hanknguyen');
});

app.get('/oauth/linkedin/callback', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if ( err )
            return console.error(err);

        console.log(results.access_token);
        var linkedin = Linkedin.init(results.access_token);
        linkedin.people.me(function (err, data) {
          firebaseApp.writeUserData(data.id, data.formattedName, '', data.pictureUrl);
        });
        return res.redirect('/testing');
    });
});

app.use('/', index);
app.use('/users', users);
app.use('/testing', testing);
app.use('/utils', utility);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
