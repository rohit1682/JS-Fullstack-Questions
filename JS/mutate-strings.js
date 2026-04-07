function mutateStrings1(str1, str2) {
    const letter1 = str1[0];
    const letter2 = str2[0];

    str1 = str1.slice(1);
    str2 = str2.slice(1);

    const result1 = letter2 + str1;
    const result2 = letter1 + str2;

    return {
        result1,
        result2
    }
}

// console.log(mutateStrings1("Hello", "World"));


function reserveString(str) {
    return str.split('').reverse().join('');
}

console.log(reserveString("Hello"));