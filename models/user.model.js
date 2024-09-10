import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        reauire:true,
        uniqued:true,
    },
    email:{
        type:String,
        reauired:true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema)
export default User;