var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var sassMiddleware = require('node-sass-middleware');
var morgan = require('morgan');
var secure = require('express-force-https');

var index = require('./routes/index');
var users = require('./routes/users');
var testing = require('./routes/testing');
var utility = require('./routes/utils');
var oauth = require('./routes/oauth');

var app = express();

// ROUTES
app.use('/', index);
app.use('/users', users);
app.use('/testing', testing);
app.use('/utils', utility);
app.use('/oauth', oauth);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(secure);
app.use(favicon(path.join(__dirname, 'public/images', 'favicon_H.jpg')));
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
          console.log("do something here!!!");
        });
        return res.redirect('/testing');
    });
});


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
