const eventBus = require('./eventBus');

eventBus.prependOnceListener('myEvent', () => console.log("This is the Listener"));
// eventBus.prependListener('myEvent', () => console.log("An event emittion is detected from the emitter"))
eventBus.on('myEvent', message => console.log(message));