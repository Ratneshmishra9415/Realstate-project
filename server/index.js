import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import  userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import listingRouter from './routes/listing.route.js'
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

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


let PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server is connected at port ${PORT}`)
});

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });