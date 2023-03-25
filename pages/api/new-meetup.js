import { MongoClient } from "mongodb";

// /api/new-meetup
// POST Requests
const apiUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.dtr7jkg.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(apiUrl);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
