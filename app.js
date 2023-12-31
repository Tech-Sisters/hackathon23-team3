var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const upload = require("express-fileupload");
const cors = require("cors");

//ROUTES
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users.routes");
var awsRouer = require("./routes/aws.routes");
var moviesRouter = require("./routes/movies.routes");
var favoriteMoviesRouter = require("./routes/favoriteMovies.routes");

//middlewares
const verifyToken = require("./auth/verifyToken");
// const isAdmin = require('./auth/isAdmin');

var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// view engine setup for pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//DB connection
require("./config/db.config")();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(upload());
app.use(cors());

//ROUTES
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", awsRouer);
app.use("/", moviesRouter);
app.use("/", favoriteMoviesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
