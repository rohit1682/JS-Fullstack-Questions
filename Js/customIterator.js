function myIterator(arr) {
    let i=0;
    return {
        next() {
            if(i<arr.length) return {
                value: arr[i++],
                done: false
            }
            else return {
                value: undefined,
                done: true,
            }
        }
    }
}

const iterator = myIterator([1,2,3,4,5]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
