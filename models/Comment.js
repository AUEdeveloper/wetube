import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("comment", CommentSchema);
