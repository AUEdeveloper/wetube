import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  fileUrl: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment"
    }
  ]
});

export default mongoose.model("video", VideoSchema);
