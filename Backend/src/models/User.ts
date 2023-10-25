import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(), //It will create a new UUID for us
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});
// Sometimes in next js  it will create a multiple instances so we can give the validation mongoose.models['User']
// since inside node js it doesn' create that so we need not to worry
export default mongoose.model("User",userSchema);