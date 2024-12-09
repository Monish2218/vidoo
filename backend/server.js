import express from 'express'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as authRouter } from './routes/auth.js';
import { router as videoRouter } from './routes/video.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.use("/api/auth", authRouter);
app.use("/api/videos", videoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})