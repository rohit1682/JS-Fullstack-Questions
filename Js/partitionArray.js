// i/p: const arr = [1, 2, 3, 4, 5];
// partition the array and return two arrays inside one. one containing all the odd numbers and other having all the even numbers
// o/p: [ [ 1, 3, 5 ], [ 2, 4 ] ]

function partition(arr) {
    return arr.reduce((acc, val) => {
        if(val%2 === 0) acc[1].push(val);
        else acc[0].push(val);
        return acc;
    }, [[], []]);
}


const arr = [1, 2, 3, 4, 5];

console.log(partition(arr));