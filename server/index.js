import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import  userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
dotenv.config();
const __dirname = path.resolve();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cookieParser())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


let PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server is connected at port ${PORT}`)
})