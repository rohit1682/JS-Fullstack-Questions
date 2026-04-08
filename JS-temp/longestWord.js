// find the longest word in the sentence 
// i/p: const str = "I love JavaScript programming";

function findLongestWord(str) {
    let longestWord = "";
    let word = "";
    for(let i of str) {
        if(i === ' ') {
            if(word.length > longestWord.length) longestWord = word;
            word = "";
        }
        word += i;
    }
    if(word.length >= longestWord.length) longestWord = word;
    return longestWord;
}


const str = "I love JavaScript programming";

console.log(findLongestWord(str));