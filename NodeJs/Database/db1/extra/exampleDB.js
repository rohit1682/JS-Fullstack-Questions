const { MongoClient } = require("mongodb");

// MongoDB connection string
// Make sure to properly encode special characters like @ using %40
const URL =
  "mongodb+srv://rohit1682:Rohit%401682@learningmongo.hnfol4j.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const dbName = "UserData";

/**
 * Example database function that demonstrates basic CRUD operations
 */
async function exampleDatabaseOperations() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to the MongoDB server");

    // Select database and collection
    const db = client.db(dbName);
    const collection = db.collection("user");

    // 1. CREATE: Insert a new user
    const newUser = {
      firstName: "Example",
      lastName: "User",
      phone: "+91 9876543210",
      dob: new Date("1995-05-15"), // Store as proper Date object
      city: "Example City",
    };

    const insertResult = await collection.insertOne(newUser);
    console.log(`Created new user with ID: ${insertResult.insertedId}`);

    // 2. READ: Find all users
    const allUsers = await collection.find({}).toArray();
    console.log(`Retrieved ${allUsers.length} users from database:`);
    console.log(allUsers);

    // 3. UPDATE: Update the user we just created
    const updateResult = await collection.updateOne(
      { _id: insertResult.insertedId },
      { $set: { city: "Updated City" } }
    );
    console.log(`Updated ${updateResult.modifiedCount} user(s)`);

    // 4. READ AGAIN: Get the updated user
    const updatedUser = await collection.findOne({
      _id: insertResult.insertedId,
    });
    console.log("Updated user document:");
    console.log(updatedUser);

    // 5. DELETE: Remove the example user
    const deleteResult = await collection.deleteOne({
      _id: insertResult.insertedId,
    });
    console.log(`Deleted ${deleteResult.deletedCount} user(s)`);

    return "Example database operations completed successfully";
  } catch (error) {
    console.error("Database operations failed:", error);
    throw error;
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
}

// Run example if this file is executed directly
if (require.main === module) {
  exampleDatabaseOperations().then(console.log).catch(console.error);
}

module.exports = { exampleDatabaseOperations };
