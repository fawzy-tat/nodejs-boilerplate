const axios = require("axios");

module.exports = {
  getMetro(req, res) {
    axios
      .get("https://api.metro.net/agencies/")
      .then(function(response) {
        // handle success
        console.log(response);
        res.json({ status: "success", message: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
        res.json({ status: "success", message: "Welcome To Users API" });
      });
  }
};
