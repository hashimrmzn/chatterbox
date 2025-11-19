// models/Message.js
import mongoose from "mongoose";

// 1️⃣ Define the structure (schema) of a Message document
const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true, // must always have a sender
    trim: true,
  },
  text: {
    type: String,
    required: true, // must always have message text
  },
  createdAt: {
    type: Date,
    default: Date.now, // auto-set time when message is created
  },
});

// 2️⃣ Prevent model overwrite error (important in serverless)
const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

// 3️⃣ Export the model to use in other files
export default Message;
