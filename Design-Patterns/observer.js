// Step 1: Define the Subject (the thing being "watched")
class Subject {
    constructor() {
      this.observers = []; // List of observers (subscribers)
    }
  
    // Add an observer
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    // Remove an observer
    unsubscribe(observer) {
      this.observers = this.observers.filter(sub => sub !== observer);
    }
  
    // Notify all observers of a change
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // Step 2: Define Observers (subscribers)
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(data) {
      // React to the update (notification)
      console.log(`${this.name} received notification: ${data}`);
    }
  }
  
  // Step 3: Use the Subject and Observers
  const subject = new Subject(); // Create the Subject
  
  const observer1 = new Observer("Observer 1"); // Create Observer 1
  const observer2 = new Observer("Observer 2"); // Create Observer 2
  
  subject.subscribe(observer1); // Observer 1 subscribes to the subject
  subject.subscribe(observer2); // Observer 2 subscribes to the subject
  
  subject.notify("Something has changed!"); 
  // Output:
  // Observer 1 received notification: Something has changed!
  // Observer 2 received notification: Something has changed!
  
  // Unsubscribe Observer 2
  subject.unsubscribe(observer2);
  
  subject.notify("Another update!");
  // Output:
  // Observer 1 received notification: Another update!