var express = require("express");
var router = express.Router();
const MetroController = require("../app/controller").MetroController;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Welcome to our express app");
});

router.get("/metro", MetroController.getMetro);

module.exports = router;
