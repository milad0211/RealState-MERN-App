import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config()
// import UserRouter from './routes/user.route.js';
//test
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('connected to MongoDB')})
.catch((err)=>{
    console.log(`error darim : ${err}`);
})


const app = express();

app.listen(3000,()=>{
    console.log('Server conected port 3000!!');
})
//test api 
app.use('/api/user/',userRouter)
// app.get('/ab',(req,res)=>{
//     res.send('secound test')
// })