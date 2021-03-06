require('dotenv').config()

let express = require("express");

let PORT = process.env.PORT || 8080;

let appExpress = express();

// Serve static content for the app from the "public" directory in the application directory.
appExpress.use(express.static("public"));

// Parse application body as JSON
appExpress.use(express.urlencoded({ extended: true }));
appExpress.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

appExpress.engine("handlebars", exphbs({ defaultLayout: "main" }));
appExpress.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

appExpress.use(routes);

// Start our server so that it can begin listening to client requests.
appExpress.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost: ${PORT}`);
});
