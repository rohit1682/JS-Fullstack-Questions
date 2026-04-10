const obj = {
    b: 5,
    a: 1,
    c: 2,
    d: 4
}

// sort by keys

const sortedByKeys = Object.fromEntries(
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
)

//sort by values

const sortedByValues = Object.fromEntries(
    Object.entries(obj).sort((a, b) => a[1] - b[1])
)

console.log("Sorted By Keys: ", sortedByKeys);
console.log("Sorted By Values: ", sortedByValues);
