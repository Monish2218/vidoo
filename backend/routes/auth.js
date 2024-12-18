import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const router = express.Router();

router.post("/register", async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({message: "User already exists"});

        const user = await User.create({name, email, password});
        res.status(201).json({id: user._id, name: user.name, email: user.email});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});

        const isPasswordValid = await user.matchPassword(password);
        if(!isPasswordValid) return res.status(401).json({message: "Invalid Credentials"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "15d"});
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})