const fs = require("node:fs");

// Synchronous File Writing
fs.writeFileSync("./writeFile2.txt", "This is write 1.");

// Asynchronous File Writing
fs.writeFile("./writeFile2.txt", " This is write 2.", {flag: "a"},
    (err) => {
    if(err) {
        console.error(err);
    }
});
