const obj = {
    a: 'x',
    b: 'x',
    c: 'y',
    d: 'z'
}

function groupByValues(obj) {
    let myMap = new Map();

    for(const val of Object.values(obj)) {
        const value = myMap.get(val) || 0;
        myMap.set(val, value + 1);
    }

    return Object.fromEntries(myMap);
    // return myMap;
}

console.log(groupByValues(obj));