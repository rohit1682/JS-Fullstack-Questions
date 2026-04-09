function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args); // When enough arguments are passed, call the original function
      } else {
        return function (...nextArgs) {
          return curried(...args, ...nextArgs); // Collect additional arguments
        };
      }
    };
  }
  
  // Example usage
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  const curriedMultiply = curry(multiply);
  
  console.log(curriedMultiply(2)(3)(4)); // Output: 24
  console.log(curriedMultiply(2, 3)(4)); // Output: 24
  console.log(curriedMultiply(2, 3, 4)); // Output: 24