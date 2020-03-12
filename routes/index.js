var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Welcome to our express app");
});

router.get("/lists/:users", function(req, res, next) {
  // return status
  if (!req.params.users) res.status(404).send("notfound");
  //handle params
  res.send(req.params.users);
  //handle querystring
  res.send(req.query);
});

module.exports = router;
