// In old mobiles models, to type a letter you had to press a given button several times. For example, to get the letter A you had to press button 2 once, and to get Z you had to press button 9 four times. That’s why, for example, the word KOT meant pressing the keys 556668. Your task is to write a method that converts any word into such a sequence of digits.


const keypad = {
    A: "2", B: "22", C: "222",
    D: "3", E: "33", F: "333",
    G: "4", H: "44", I: "444",
    J: "5", K: "55", L: "555",
    M: "6", N: "66", O: "666",
    P: "7", Q: "77", R: "777", S: "7777",
    T: "8", U: "88", V: "888",
    W: "9", X: "99", Y: "999", Z: "9999"
};

function convert(word) {
    word = word.toUpperCase();
    let result = "";
    for(let i=0; i<word.length; i++) {
        result += keypad[word[i]];
    }
    return result;
}

console.log(convert("helLo"));