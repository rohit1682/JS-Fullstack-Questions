function cloneDeep(val, seen = new WeakMap()) {
    if(val === null || typeof val !== "object") return val;
    if(seen.has(val)) return seen.get(val);
    if(val instanceof Date) return new Date(val.getTime());

    if(Array.isArray(val)) {
        let arr = [];
        seen.set(val, arr);
        
        for(let item of val) {
            arr.push(cloneDeep(item, seen));
        }
        return arr;
    }
    
    let result = Object.create(Object.getPrototypeOf(obj));
    seen.set(val, result);

    for(const key in val) {
        if(Object.hasOwn(val, key)) result[key] = cloneDeep(val[key])
    }

    return result;
}

const input = [
    {name : "Alice", age: 24},
    {name : "Bob", age: 25},
    {name : "Tim", age: 7}
]

const result = cloneDeep(input);
input[0].age = 30;

console.log(input);
console.log(result);