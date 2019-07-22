//require
const express = require("express");
const bodyParser = require("body-parser"); 
const exphbs = require("express-handlebars"); 

//server 
const app = express(); 
let PORT = process.env.PORT || 3300; 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//listen to server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});