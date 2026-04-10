// Singleton object
const Singleton = (function () {
    let instance; // Private variable to store the instance
  
    // Create the instance
    function createInstance() {
      const obj = { name: "I am the singleton object!" }; // Example object
      return obj;
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance(); // Create the instance only if it doesn’t exist
        }
        return instance; // Return the existing instance
      }
    };
  })();
  
  // Usage
  const objA = Singleton.getInstance(); // Fetch the singleton instance
  const objB = Singleton.getInstance(); // Fetch the same singleton instance again
  
  console.log(objA === objB); // true (Both refer to the same instance)
  console.log(objA.name); // "I am the singleton object!"
  console.log(objB.name); // "I am the singleton object!"