import mongoose from "mongoose";

const messagesCollection = "Messages"

const messagesSchema = new mongoose.Schema({
   user: { type: String, required: true },
   message: { type: String, required: true }
});

export const messageModel = mongoose.model(messagesCollection, messagesSchema)