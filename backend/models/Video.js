import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    title: {type: String, required: true},
    description: {type: String},
    url: {type: String, required: true},
    thumbnail: {type: String},
    tags: [{type: String}],
    duration: { type: String },
    uploadedAt: {type: Date, default: Date.now},
},{timestamps: true});

export const Video = mongoose.model("Video", VideoSchema);