const express = require("express");
const router = express.Router(); 
const burger = require("../models/burger_model.js");

router.get("/", function(req, res) {
    console.log("Route Path Hit");
    burger.selectAll((data) => {
      handlebarsObject = {
        burger: data
      };
      console.log("Diplayed Burgers");
      res.render("index", handlebarsObject);
    });

});

//Post routes

router.post("/api/burger", function(req, res) {
  console.log("burger Route Hit");
  burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
    // Send back the ID of the new quote
    console.log(result);
    res.json(result);
  });
});

router.put("/api/burger/:id", function(req, res) {

  let burgerID = req.params.id
  let condition = "id = " + burgerID ;

  console.log("burger Route Hit. ID is "+ burgerID);
  console.log("Dev is " + req.body.devoured);

  burger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
    console.log("1st callBack");
    res.json(result);
  });
});

module.exports = router;
