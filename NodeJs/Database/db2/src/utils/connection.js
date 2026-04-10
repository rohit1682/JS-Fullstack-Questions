const { MongoClient } = require("mongodb");

/**
 * MongoDB connection utility
 * Provides connection to the MongoDB database
 */

// MongoDB connection string
const URL =
  "mongodb+srv://rohit1682:Rohit%401682@mongodb-practice.7pgcqiz.mongodb.net/";
// %40 is used to encode the @ symbol in the URL

const dbName = "UserCRUD"; // Database name
// Collection name
const collectionName = "user";

/**
 * Get a MongoDB collection with an active connection
 * @returns {Object} Object containing collection and client instances
 */
async function getCollection() {
  const client = new MongoClient(URL);
  try {
    await client.connect();
    console.log("Connected to the MongoDB server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return { collection, client };
  } catch (error) {
    console.error("Connection error:", error);
    throw error;
  }
}

module.exports = { getCollection };
