import { connectDB } from "./db/connectDB.js";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ ok: true });
}
