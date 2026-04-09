// One can send an entire function structure/definition of a function as an argument

//The Main Calculator function
function calculate(a, b, callback) {
    callback(a,b);
}

//The Main Function to Execute
function execute() {
    let a = 10;
    let b = 5;
    
    console.log(calculate(a, b, (a,b) => {
        console.log("The Sum of the Numbers are: ", (a+b) );
    }));

    console.log(calculate(a, b, (a,b) => {
        console.log("The Difference of the Numbers are: ", (a-b) );
    }));

    console.log(calculate(a, b, (a,b) => {
        console.log("The Multiplication of the Numbers are: ", (a*b) );
    }));

    console.log(calculate(a, b, (a,b) => {
        console.log("The Division of the Numbers are: ", (a/b) );
    }));
}

execute(); //main function is getting executed