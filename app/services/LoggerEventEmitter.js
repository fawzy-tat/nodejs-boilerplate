const EventEmitter = require("events");

class LoggerEmitter extends EventEmitter {
  log(eventName, message) {
    console.log(message);
    //raise an event
    this.emit(eventName, { id: 1, details: "event number 1 emitted" });
  }
}

module.exports = LoggerEmitter;
