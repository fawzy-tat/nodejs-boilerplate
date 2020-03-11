const LoggerEmitter = require("../services/LoggerEventEmitter");
const logger = new LoggerEmitter();

module.exports = {
  testLogger(req, res) {
    // Register the listener first then emit the event
    // Real world example : You want to send out a bunch of different emails after a user’s registration
    logger.on("logMessage", arg => {
      res.json({ status: "success", response: arg });
    });

    logger.log("logMessage", "messageawy");
  }
};
