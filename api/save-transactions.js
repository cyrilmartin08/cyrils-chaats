import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
app.use(cors()); // 👈 enable CORS for all origins
app.use(express.json());

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

app.post("/api/save-transactions", async (req, res) => {
  try {
    const client = await clientPromise;
    const database = client.db("chaat_shop"); 
    const transactions = database.collection("transactions");

    const result = await transactions.insertOne(req.body);

    res.status(200).json({
      message: "Transaction saved successfully",
      id: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

