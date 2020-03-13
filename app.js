require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
/**
 * morgan logs every http request by default to the console .. you can set it to log to a file instead
 */
var logger = require("morgan");
/**
 * helmet is a middleware that adds and removes some headers for adding more security
 */
const helmet = require("helmet");
/**
 * const debug = require("debug")("app:log"); // You are free to name the debug namespace as you like
 * +0ms is time spent from the last debug message
 */
const debug = require("debug")("app:db");

/**
 * Registering all seq
 */
var models = require("./app/models");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(helmet());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

if (process.env.NODE_ENV !== "production") app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//sync Database
models.sequelize
  .sync()
  .then(() => {
    debug("Connection has been established successfully.");
  })
  .catch(err => {
    debug("Unable to connect to the database:", err);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
