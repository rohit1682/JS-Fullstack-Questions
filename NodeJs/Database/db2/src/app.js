const express = require('express');
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
    // const { firstName, lastName, emailId, password, age, gender } = req.body;
    
    //creating a new instance of a User Model
    const User = new User({
        firstName: "Rohit",
        lastName: "Ghosh",
        emailId: "rohit_ghosh@epam.com",
        password: "rohit123",
        age: 25,
        gender: "Male",
    });

    //saving the user to the database
    await User.save()
        .then(() => {
            console.log("User saved successfully");
            res.status(201).json({ message: "User created successfully" });
        })
        .catch((err) => {
            console.error("Error saving user:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});


connectDB()
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
