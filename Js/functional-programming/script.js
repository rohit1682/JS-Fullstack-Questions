// The logics

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

// My own Map function with built-in map like features

Array.prototype.calculate = function (logic) {
    const output = [];
    for(let i=0; i<this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

//Calling my own map function

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));


// // calling the actual built-in map function

// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));


// // My own Map function

// const calculate = function (radius, logic) {
//     const output = [];
//     for(let i=0; i<radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// //Calling my own map function

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

