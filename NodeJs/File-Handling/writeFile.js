const fs = require("node:fs");

// Synchronous File Writing
fs.writeFileSync("./writeFile1.txt", "This is write 1");

// Asynchronous File Writing
fs.writeFile("./writeFile1.txt", "This is write 2",
    (err) => {
    if(err) {
        console.error(err);
    }
});
