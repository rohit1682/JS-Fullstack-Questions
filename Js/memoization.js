function memoResult() {
    let memo = [];
    return function (num) {
        if(memo[num]) {
            console.log("Received old value");
            return memo[num];
        }

        console.log("New value received");        
        memo[num] = num*10;
        return memo[num];
    }
}

const memo = memoResult();

console.log(memo(1));
console.log(memo(2));
console.log(memo(3));
console.log(memo(4));
console.log(memo(5));
console.log(memo(6));
console.log(memo(7));
console.log(memo(8));
console.log(memo(9));


console.log(memo(4));
console.log(memo(7));


