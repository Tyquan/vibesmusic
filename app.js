const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const compression = require('compression');
const multer = require('multer');
const config = require('./config/config'); // get our config file

const index = require('./routes/index');
//const auth = require('./routes/auth');
const admin = require('./routes/admin');
const messages = require('./routes/messages');

const videos = require('./api/videos');
const comments = require('./api/comments');
const views = require('./api/views');
const subscribers = require('./api/subscribers');

// mlab connection 
const mongoUri = 'mongodb://Tyquan:Jamela17!@ds135926.mlab.com:35926/mocky';

// mongoose mlab connection
mongoose.connect(mongoUri, {
	useNewUrlParser: true
});
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(compression());

app.set('superSecret', config.secret); // secret constiable

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'fav.png')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keysessionsaidding',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 180 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.use('/', index);
//app.use('/auth', auth);
app.use('/admin', admin);
app.use('/messages', messages);

// API
app.use('/api/v1/videos', videos);
app.use('/api/v1/comments', comments);
app.use('/api/v1/views', views);
app.use('/api/v1/subscribers', subscribers);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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