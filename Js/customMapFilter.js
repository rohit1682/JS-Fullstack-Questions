// custom filter using reduce

function filterOperation(val) {
    if(val%2 === 0) return val;
}

function customFilter(arr) {
    return arr.reduce((acc, val) => {
        if(filterOperation(val)) acc.push(filterOperation(val));
        return acc;
    }, []);
}

console.log(customFilter([1,2,3,4,5,6,7,8,9]));




// custom map using reduce

function mapOperation(val) {
    return val*2; // any logic can be written here now
}

function customMap(arr) {
    return arr.reduce((acc, val) => {
        acc.push(mapOperation(val));
        return acc;
    }, []);
}

// console.log(customMap([1,2,3,4,5,6,7,8,9]));