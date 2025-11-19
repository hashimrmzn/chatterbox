import { connectDB } from "./db/connect.js";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ success: true, message: "MongoDB connected!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
