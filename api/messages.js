import { connectDB } from "./db/connect.js";
import { Message } from "./db/models.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const newMsg = await Message.create(req.body);
    return res.status(201).json(newMsg);
  }

  if (req.method === "GET") {
    const msgs = await Message.find().populate("user chat");
    return res.status(200).json(msgs);
  }

  res.status(405).json({ error: "Method not allowed" });
}
