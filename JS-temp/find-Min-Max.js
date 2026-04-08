function findMinMax(a, b, c) {
    if(typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number") throw new Error("Type Error");

    let max = Math.max(a,b,c);
    let min = Math.min(a,b,c);
    
    return {
        max, min
    }
}

console.log(findMinMax(1,2,3));