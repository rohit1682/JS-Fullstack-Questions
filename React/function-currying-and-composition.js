//function currying example

function add(a) {
  return function(b) {
    return a + b;
  };
}

// Example usage
const addFive = add(5);
const result1 = addFive(10); // 5 + 10 = 15


//function composition example

function sum (a,b) {
  return a + b;
}

function multiply (a,b) {
  return a * b;
}

function compose(fn1, fn2) {
  return function(...args) {
    return fn1(fn2(...args));
  };
}

const sumThenMultiply = compose(multiply, sum);
// Example usage
const result2 = sumThenMultiply(2, 3, 4); // (2 + 3) * 4 = 5 * 4 = 20

