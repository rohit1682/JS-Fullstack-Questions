
function findMinMax(arr) {
    return {
        min: (Math.min(...arr)),
        max: (Math.max(...arr))
    }
}

console.log(findMinMax([1,2,3,4,5,6,7,8,9]));

