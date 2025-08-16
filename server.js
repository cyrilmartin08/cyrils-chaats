// Import necessary libraries
const express = require('express'); // Express.js for building the server
const { MongoClient, ServerApiVersion } = require('mongodb'); // MongoDB driver for connecting to the database
const cors = require('cors'); // CORS middleware to allow cross-origin requests

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies and enable CORS
app.use(express.json()); // Allows the server to understand JSON data from the client
app.use(cors()); // Enables Cross-Origin Resource Sharing, allowing your frontend to make requests

// MongoDB connection URI
// This URI connects to your local MongoDB instance running on the default port 27017.
const uri = "mongodb://127.0.0.1:27018/";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/**
 * Main function to run the server and connect to the database.
 * We use an async function to use 'await' for database operations.
 */
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Get the database and the collection
    // The database will be created automatically if it doesn't exist.
    const database = client.db("chaat_shop");
    // The collection will be created automatically if it doesn't exist.
    const transactions = database.collection("transactions");

    // Define a POST endpoint to receive and store transaction data
    app.post('/save-transaction', async (req, res) => {
      try {
        // Log the incoming data to the console for debugging
        console.log("Received transaction data:", req.body);
        
        // Get the transaction data from the request body
        const transactionData = req.body;
        
        // Insert the transaction data into the 'transactions' collection
        const result = await transactions.insertOne(transactionData);
        
        // Send a success response back to the frontend
        res.status(200).send({
          message: "Transaction saved successfully!",
          transactionId: result.insertedId,
        });

        console.log("Transaction saved with ID:", result.insertedId);

      } catch (error) {
        // Handle any errors during the database operation
        console.error("Error saving transaction:", error);
        res.status(500).send({
          message: "Failed to save transaction.",
          error: error.message,
        });
      }
    });

    // Start the server and listen for incoming requests
    app.listen(port, () => {
      console.log(`Server is running at http://127.0.0.1:${port}`);
    });

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

// Run the main function
run().catch(console.dir);

