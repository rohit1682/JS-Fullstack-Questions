const http = require("http");

const server = http.createServer(function (req, res) {
    // whatever request is sent in this port "7777", a "hello world" message will be sent back as response
    // if the url sends a specific request, i will retrun a specific ans

    if(req.url === "/getSecretData") {
        res.end("There is no Secret Data");
    }

    res.end("Hello World");

});

server.listen(7777);

//run the code
// now try this in any browser: http://localhost:7777/
// now try this in any browser: http://localhost:7777/getSecretData