import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  author: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
});

export const quotModal =
  mongoose.models.quotes || mongoose.model("quotes", quoteSchema);
