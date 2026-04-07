const eventBus = require('./eventBus');

const message = "Hello Message from Emitter";

eventBus.emit('myEvent', message);
eventBus.emit('myEvent', message);
eventBus.emit('myEvent', message);
eventBus.emit('myEvent', message);
