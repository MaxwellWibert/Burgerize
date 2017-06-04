var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
var app = express();

// Requiring our models for syncing
var db = require("./models");

var PORT = 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));
// Static directory
app.use(express.static("./public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes =============================================================

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
console.log("routes used");
// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(3306, function() {
    console.log("App listening on PORT " + PORT);
  });
});

