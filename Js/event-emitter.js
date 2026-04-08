const EventEmitter = require('events');
const eventBus = new EventEmitter();

// console.log(eventBus.emit("message")); // this will not work and return false

eventBus.on("message", () => {
    console.log("Event Emitter is triggered");
});

console.log("Before Event Emitter");
console.log(eventBus.emit("message"));
console.log("After Event Emitter");