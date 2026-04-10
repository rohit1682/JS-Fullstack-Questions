const userService = require("../services/userService");

/**
 * User Controller - Handles HTTP requests and responses
 */
const userController = {
  // Create a new user
  create: async (req, res) => {
    try {
      const result = await userService.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Server error creating user:", error);
      res
        .status(500)
        .json({ error: "Failed to create user. Please try again later." });
    }
  },

  // Get all users
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll();
      res.json(users || []);
    } catch (error) {
      console.error("Server error while fetching users:", error);
      res
        .status(500)
        .json({ error: "Failed to retrieve users. Please try again later." });
    }
  },

  // Get user by ID
  getById: async (req, res) => {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error(`Server error fetching user ${req.params.id}:`, error);
      res
        .status(500)
        .json({ error: "Failed to retrieve user. Please try again later." });
    }
  },

  // Update user
  update: async (req, res) => {
    try {
      const result = await userService.update(req.params.id, req.body);
      if (result.modifiedCount === 0) {
        return res
          .status(404)
          .json({ message: "User not found or no changes made" });
      }
      res.json({ message: "User updated successfully", result });
    } catch (error) {
      console.error(`Server error updating user ${req.params.id}:`, error);
      res
        .status(500)
        .json({ error: "Failed to update user. Please try again later." });
    }
  },

  // Delete user
  delete: async (req, res) => {
    try {
      const result = await userService.delete(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully", result });
    } catch (error) {
      console.error(`Server error deleting user ${req.params.id}:`, error);
      res
        .status(500)
        .json({ error: "Failed to delete user. Please try again later." });
    }
  },
};

module.exports = userController;
