// input 
// const arr = [1, [2, [3, 4], 5], 6];

// output
// [4, 16, 36]


function flatArray(arr) {
    const result = arr.reduce((res, val) => {
        if(Array.isArray(val)) return res.concat(flatArray(val));
        return res.concat(val);
    }, []);
    return result;
}

function filterAndReturnSq(arr) {
    const result = arr.reduce((res, val) => {
        if(val%2 === 0) return res.concat(Math.pow(val, 2));
        return res;
    }, []);
    return result;
}

const flatArrayAndReturnEvenSq = arr => filterAndReturnSq(flatArray(arr));

console.log(flatArrayAndReturnEvenSq([1, [2, [3, 4], 5], 6]));