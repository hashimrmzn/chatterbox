import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});

const ChatSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});

const MessageSchema = new mongoose.Schema({
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
export const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);
