import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    title: {type: String, required: true},
    description: {type: String},
    tags: [{type: String}],
    url: {type: String, required: true},
    uploadedAt: {type: Date, default: Date.now},
});

export const Video = mongoose.model("Video", VideoSchema);