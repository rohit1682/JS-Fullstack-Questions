function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }
    
    if (value instanceof Date) {
        return new Date(value.getTime());
    }
    
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }
 
    const clonedObj = {};

    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(value[key]);
        }
    }
 
    return clonedObj;
}


function addProperty(input) {
    const result = input.map((value) => {
        return {
            ...value,
            isAdult: value.age >= 18
        }
    })
    return result;
}

function sortWithAge(input) {
    const result = input.sort((a,b) => a.age - b.age);
    return result;
}


const input = [
    {name : "Alice", age: 24},
    {name : "Bob", age: 25},
    {name : "Tim", age: 7}
]

// console.log(deepClone(input));
// console.log(addProperty(input));
// console.log(sortWithAge(input));



