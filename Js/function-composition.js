
function add3(num) {
    return num+3;
} 

function multiply5(num) {
    return num*5;
}

const add3AndMul5 = num => multiply5(add3(num));

console.log(add3AndMul5(10)); // (10 + 3) * 5 = 13 * 5 = 65