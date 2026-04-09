// Callback is a feature of JS by which it can send a function as a parameter.

// Function here are declared and difined and the function names have been passed as arguments.

//The Sum Function
function sum(a,b) {
    console.log("The Sum of the Numbers are: ", (a+b) );
}

//The Difference Function
function difference(a,b) {
    console.log("The Difference of the Numbers are: ", (a-b) );
}

//The Multiply Function
function multiply(a,b) {
    console.log("The Multiplication of the Numbers are: ", (a*b) );
}

//The Divide Function
function divide(a,b) {
    console.log("The Division of the Numbers are: ", (a/b) );
}

//The Main Calculator function
function calculate(a, b, callback) {
    callback(a,b);
}

//The Main Function to Execute
function execute() {
    let a = 10;
    let b = 5;
    
    console.log(calculate(a, b, sum));
    console.log(calculate(a, b, difference));
    console.log(calculate(a, b, multiply));
    console.log(calculate(a, b, divide));
}

execute(); //main function is getting executed



