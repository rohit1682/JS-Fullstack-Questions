function* generatorFunction(arr) {
    let i=0;
    while(i<arr.length) {
        yield arr[i++];
    }
}

const gen = generatorFunction([1,2,3,4,5,6,7,8,9]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());