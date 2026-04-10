function Count() {
    let count = 0;

    return function (type) {
        if(type === "Increment") return (++count);
        else if(type === "Decrement") return (--count);
        else return 0;
    }
} 

const counter = Count();

console.log(counter("Increment"));
console.log(counter("Increment"));
console.log(counter("Increment"));
console.log(counter("Increment"));
console.log(counter("Increment"));
console.log(counter("Increment"));

console.log(counter("Decrement"));
console.log(counter("Decrement"));
console.log(counter("Decrement"));
console.log(counter("Decrement"));
console.log(counter("Decrement"));


console.log(counter());
