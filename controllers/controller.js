var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hdbrsObj = {
      burgers: data,
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", function (req, res) {
    burger.insertOne(
      ["burger_name", "eaten"],
      [req.body.burger_name, req.body.eaten],
      function (result) {
        res.json({ id: result.insertId });
      }
    );
  });

  router.put("/api/burgers/:id", function (req, res) {


    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ eaten: req.body.eaten }, condition, function (result) {
      if (result.changeRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});

module.exports = router;
