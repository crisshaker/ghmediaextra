const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const keys = require("./config/keys");

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// connect to Database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/ghmedia");
const db = mongoose.connection;
db.on("error", () => console.log("error connecting to database"));
db.once("open", () => console.log("DB connection successful"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use sessions to track user login
app.use(
  session({
    secret: keys.sessionSecret,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  })
);

// run one time files and services
require("./models/Admin");

// run router file
require("./router")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
