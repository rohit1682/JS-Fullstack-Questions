// Step 1: Define a module
const calculatorModule = (function () {
    // Private variables and methods
    let history = [];
  
    function addToHistory(result) {
      history.push(result);
    }
  
    // Public methods
    return {
      add: function (a, b) {
        const result = a + b;
        addToHistory(result); // Use private method
        return result;
      },
      subtract: function (a, b) {
        const result = a - b;
        addToHistory(result);
        return result;
      },
      getHistory: function () {
        return history; // Expose private history variable
      }
    };
  })();
  
  // Step 2: Use the module
  console.log(calculatorModule.add(5, 3)); // Output: 8
  console.log(calculatorModule.subtract(10, 4)); // Output: 6
  console.log(calculatorModule.getHistory()); // Output: [8, 6]
  
  // History is accessible ONLY through the public method getHistory()
  console.log(calculatorModule.history); // undefined (history is private)