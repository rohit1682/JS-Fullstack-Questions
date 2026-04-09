const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userController = require("./controllers/userController");

const app = express();
const PORT = 3000;

// Middleware - configure CORS for all origins
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());

// Serve static files from database directory only
app.use(express.static(path.join(__dirname)));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API Routes

// Create user
app.post("/api/users", userController.create);

// Get all users
app.get("/api/users", userController.getAll);

// Get user by ID
app.get("/api/users/:id", userController.getById);

// Update user
app.put("/api/users/:id", userController.update);

// Delete user
app.delete("/api/users/:id", userController.delete);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
