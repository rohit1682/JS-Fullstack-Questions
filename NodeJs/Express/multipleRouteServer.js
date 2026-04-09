const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Server is running on PORT: 3000");
});

app.use("/test", 
    (req, res, next) => {
        console.log("First Response");
        res.send("This is the First Response");
        next();
    },

    (req,res) => {
        console.log("Second Response");
        res.send("This is the second Response"); // this line will throw an error because multiple responses cannot be sent to a particular port request
    }
);