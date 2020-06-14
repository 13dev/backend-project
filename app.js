const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { responseEnhancer } = require('express-response-formatter')
const passportService = require('./services/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const malwaresRouter = require('./routes/malwares');
const authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(responseEnhancer());
app.use(express.static(__dirname));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/malwares', malwaresRouter);
app.use('/auth', authRouter);

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.setHeader('Content-Type', 'application/json');
  res.status(500);
  res.send(JSON.stringify(err))
});

module.exports = app;
