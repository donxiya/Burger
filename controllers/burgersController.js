//require
const express = require("express");
//const bodyParser = require("body-parser"); 

let PORT = process.env.PORT || 3300; 
var router = express();
const burger = require("../models/burger_model.js");

router.get("/", function (req, res) {
  burger.selectAll((data) => {
    handlebarsObject = {
      burger: data
    };
    res.render("index", handlebarsObject);
  });

});

//Post routes

router.post("/api/burger", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body["burger_name"], req.body.devoured], (result) => {
    res.json(result);
  });
});

router.put("/api/burger/:id", function (req, res) {

  let burgerID = req.params.id
  let condition = "id = " + burgerID;



  burger.updateOne(["devoured"], [req.body.devoured], condition, (result) => {
    res.json(result);
  });
});

module.exports = router;
