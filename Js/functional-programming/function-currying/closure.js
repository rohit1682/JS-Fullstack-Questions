function multiply(a) {
  return function(b) {
    console.log(a*b);
  }
}

let multiply2 = multiply(2);
multiply2(3);

let multiply3 = multiply(3);
multiply3(3);

// function curriedSum(a) {
//     let total = a;
  
//     function nextSum(b) {
//       if (b !== undefined) {
//         total += b;
//         return nextSum; // Return the same function for chaining
//       }
//       return total; // Return the result when no argument is provided
//     }
  
//     return nextSum;
//   }
  
//   console.log(curriedSum(5)(10)(15)()); // Output: 30