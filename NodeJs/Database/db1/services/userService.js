const { getCollection } = require("../utils/connection");
const { ObjectId } = require("mongodb");

/**
 * User Service - Handles all database interactions for user CRUD operations
 */
const userService = {
  /**
   * Create a new user
   * @param {Object} userData - User data to insert
   * @returns {Object} Result of the insertion
   */
  create: async (userData) => {
    const { collection, client } = await getCollection();
    try {
      // Format date correctly
      if (userData.dob) {
        userData.dob = new Date(userData.dob.split("/").reverse().join("-"));
      }

      const result = await collection.insertOne(userData);
      console.log(`Inserted document with _id: ${result.insertedId}`);
      return result;
    } catch (error) {
      console.error("Error inserting document:", error);
      throw error;
    } finally {
      await client.close();
    }
  },

  /**
   * Get all users
   * @returns {Array} Array of user documents
   */
  getAll: async () => {
    let client = null;
    try {
      const { collection, client: dbClient } = await getCollection();
      client = dbClient;

      console.log("Attempting to retrieve all users");

      const users = await collection.find({}).toArray();
      console.log(`Retrieved ${users.length} users from database`);

      return users;
    } catch (error) {
      console.error("Error fetching all users:", error);
      return []; // Return empty array instead of throwing to prevent UI errors
    } finally {
      if (client) {
        try {
          await client.close();
        } catch (closeError) {
          console.error("Error closing connection:", closeError);
        }
      }
    }
  },

  /**
   * Get a user by ID
   * @param {string} userId - User ID to find
   * @returns {Object|null} User document or null if not found
   */
  getById: async (userId) => {
    let client = null;
    try {
      const { collection, client: dbClient } = await getCollection();
      client = dbClient;

      console.log(`Attempting to retrieve user with ID: ${userId}`);

      const user = await collection.findOne({ _id: new ObjectId(userId) });

      if (user) {
        console.log(`Retrieved user: ${user.firstName} ${user.lastName}`);
      } else {
        console.log(`No user found with ID: ${userId}`);
      }

      return user;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      return null; // Return null instead of throwing to prevent UI errors
    } finally {
      if (client) {
        try {
          await client.close();
        } catch (closeError) {
          console.error("Error closing connection:", closeError);
        }
      }
    }
  },

  /**
   * Update a user by ID
   * @param {string} userId - User ID to update
   * @param {Object} updateData - Data to update
   * @returns {Object} Result of the update operation
   */
  update: async (userId, updateData) => {
    const { collection, client } = await getCollection();
    try {
      // Format date correctly if it's being updated
      if (updateData.dob) {
        updateData.dob = new Date(
          updateData.dob.split("/").reverse().join("-")
        );
      }

      const result = await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: updateData }
      );

      console.log(`Modified ${result.modifiedCount} document(s)`);
      return result;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    } finally {
      await client.close();
    }
  },

  /**
   * Delete a user by ID
   * @param {string} userId - User ID to delete
   * @returns {Object} Result of the deletion operation
   */
  delete: async (userId) => {
    const { collection, client } = await getCollection();
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(userId) });
      console.log(`Deleted ${result.deletedCount} document(s)`);
      return result;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    } finally {
      await client.close();
    }
  },
};

module.exports = userService;
