function findFirstNonRepeatingChar(str) {
    let map = new Map();

    for(let i=0; i< str.length; i++) {
        map.set(str.charAt(i) , ((map.get(str.charAt(i))) || 0 ) + 1)
    }

    for([key, val] of map) {
        if(val === 1) return key;
    }

    return null;
}

console.log(findFirstNonRepeatingChar("Hello"))




function countOccurence(str) {
    let map = new Map();
    // let freq = [];

    for(let i=0; i< str.length; i++) {
        map.set(str.charAt(i) , ((map.get(str.charAt(i))) || 0 ) + 1)

        // if(!freq[str.charAt(i)]) freq[str.charAt(i)] = 0;
        // freq[str.charAt(i)]++;

    }

    return map;
}

console.log(countOccurence("hello"));






function reverseString(str) {
    // return str.split('').reverse().join('');
    let result = "";
    for(let i=str.length-1; i>=0; i--) {
        result += str.charAt(i);
    }
    return result;
}

console.log(reverseString("Hello"));