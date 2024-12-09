import express from 'express';
import {Video} from '../models/Video.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

export const router = express.Router();

router.post("/upload", authMiddleware, async(req, res)=>{
    const { title, description, tags, url } = req.body;

    if (!title || !url) {
        return res.status(400).json({ message: "Title and URL are required" });
    }

    try {
        const video = await Video.create({
            user: req.user.id,
            title,
            description,
            tags,
            url
        });

        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/my-videos", authMiddleware, async(req, res)=>{
    try {
        const videos = await Video.find({user: req.user.id}).sort({uploadedAt: -1});
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async(req, res)=>{
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        res.json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});