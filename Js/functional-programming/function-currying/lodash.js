const _ = require("lodash");

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = _.curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6