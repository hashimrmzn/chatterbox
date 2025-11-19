import { connectDB, Chat } from "./_db";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const chats = await Chat.find();
    return res.status(200).json(chats);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
