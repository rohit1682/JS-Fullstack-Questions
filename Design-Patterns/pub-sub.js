// PubSub Class (Message Broker)
class PubSub {
    constructor() {
      this.events = {}; // Stores events and their subscribers
    }
  
    // Subscribe to an event
    subscribe(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = []; // Initialize event if not already present
      }
      this.events[eventName].push(callback); // Add subscriber (callback function)
    }
  
    // Publish an event (notify subscribers)
    publish(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(callback => callback(data)); // Notify all subscribers
      }
    }
  
    // Unsubscribe from an event
    unsubscribe(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(sub => sub !== callback);
      }
    }
  }
  
  // Example Usage
  
  const pubSub = new PubSub(); // Create Pub/Sub system
  
  // Subscriber 1
  pubSub.subscribe("news", message => {
    console.log(`Subscriber 1 received news: ${message}`);
  });
  
  // Subscriber 2
  pubSub.subscribe("news", message => {
    console.log(`Subscriber 2 received news: ${message}`);
  });
  
  // Publisher sends a message (publish an event)
  pubSub.publish("news", "Breaking News: JavaScript is awesome!");
  // Output:
  // Subscriber 1 received news: Breaking News: JavaScript is awesome!
  // Subscriber 2 received news: Breaking News: JavaScript is awesome!
  
  // Unsubscribe one of the subscribers
  const callback = message => {
    console.log(`Subscriber 3 received news: ${message}`);
  };
  pubSub.subscribe("news", callback); // Add Subscriber 3
  pubSub.unsubscribe("news", callback); // Now Subscriber 3 won't receive news after this
  
  pubSub.publish("news", "Another JavaScript update!");
  // Output:
  // Subscriber 1 received news: Another JavaScript update!
  // Subscriber 2 received news: Another JavaScript update!