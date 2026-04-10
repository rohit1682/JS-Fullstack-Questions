const http = require("http");

const server = http.createServer(function (req, res) {
    // whatever request is sent in this port "7777", a "hello world" message will be sent back as response

    res.end("Hello World");

});

server.listen(7777);

//run the code
// now try this in any browser: http://localhost:7777/