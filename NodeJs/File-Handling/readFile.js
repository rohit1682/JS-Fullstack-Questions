const fs = require("node:fs");

console.log("first")

// Synchronous File Reading
const fileContentSync = fs.readFileSync("./readFile1.txt", "utf-8");
console.log(fileContentSync);

console.log("second")

// Asynchronous File Reading
const fileContentAsync = fs.readFile("./readFile1.txt", "utf-8",
    (err, data) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
});

console.log("third")

