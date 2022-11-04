var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var chartRouter = require('./routes/chart');
var registerRouter = require('./routes/register');
var dataTableRouter = require('./routes/data-table');
var analysticRouter = require("./routes/analystic");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());
const fixPublic = express.static(path.join(__dirname, "public"));
app.use(fixPublic);

app.use('/', indexRouter);
app.use("/api", loginRouter, fixPublic);
app.use("/api", logoutRouter, fixPublic);
app.use("/api/users", registerRouter, fixPublic);
app.use("/api/products", chartRouter, fixPublic);
app.use("/api/products", dataTableRouter, fixPublic);
app.use("/api/products", analysticRouter, fixPublic);
app.use("/users", usersRouter, fixPublic);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
