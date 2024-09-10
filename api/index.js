import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

dotenv.config()
// import UserRouter from './routes/user.route.js';
//test
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('connected to MongoDB')})
.catch((err)=>{
    console.log(`error darim : ${err}`);
})


const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server conected port 3000!!');
})
//test api 
app.use('/api/user/',userRouter);
app.use('/api/auth',authRouter);