
function multiply(a, b) {
  return a*b;
}

const multiply2 = multiply.bind(this, 2);
const multiply3 = multiply.bind(this, 3);
const multiply5 = multiply.bind(this, 5);

console.log(multiply2(3));



// function add(a, b) {
//     return a + b;
// }
  
// const addFive = add.bind(null, 5); // Pre-fill the first argument as 5
// console.log(addFive(3)); // Output: 8


