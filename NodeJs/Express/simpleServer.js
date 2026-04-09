const express = require('express');


// creating a basic server
const app = express();

// making the server listen to a port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// creating a route

// this will return the same response for all routes
// app.use((req, res) => {
//     res.send('Hello from Server 1');
// });

// creating routes
app.get('/', (req, res) => {
    res.send('Hello from Server 1');
});

app.get('/test', (req, res) => {
    res.send('Test page');
});










