import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
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