var express = require("express");
var router = express.Router();
const EventsController = require("../app/controller").EventsController;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Welcome to our express app");
});

router.get("/log", EventsController.testLogger);

module.exports = router;
