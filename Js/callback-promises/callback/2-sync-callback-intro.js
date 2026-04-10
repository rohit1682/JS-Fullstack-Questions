//synchronous callback example

//first() is defined
function first(second) {
    console.log("First is executed");
    //second() is called from first
    second();
}

//first() is called
first(
    // second() is defined and passed as an argument
    function second() {
        console.log("Second is Executed");
    }
);

