import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const database = client.db("chaat_shop"); // database name
      const transactions = database.collection("transactions"); // collection name

      const result = await transactions.insertOne(req.body);

      res.status(200).json({
        message: "Transaction saved successfully",
        id: result.insertedId,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
