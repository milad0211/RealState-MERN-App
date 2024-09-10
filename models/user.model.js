import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        reauire:true,
        unique:true,
    },
    email:{
        type:String,
        reauire:true,
        unique:true,
    },
    password :{
        type:String,
        reauire:true,
    }
},{timeStamp:true});

const User = mongoose.model('User',userSchema)
export default User;