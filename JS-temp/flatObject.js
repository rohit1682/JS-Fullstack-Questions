// Flatten Object (Hard 🔥) 
// Given: const obj = { a: 1, b: { c: 2, d: { e: 3 } } }; 
// 👉 Convert to: { "a": 1, "b.c": 2, "b.d.e": 3 }


function flattenObject(input, prefix = "", result = {}) {
    for(const key in input) {
        if(Object.hasOwn(input, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if(typeof input[key] === 'object' && input[key] !== null) flattenObject(input[key], newKey, result);
            else result[newKey] = input[key];
        }
    }
    return result;
}


const input = { 
    a: 1, 
    b: { 
        c: 2, 
        d: { 
            e: 3 
        } 
    } 
}; 


console.log(flattenObject(input));