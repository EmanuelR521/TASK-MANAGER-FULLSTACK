import mongoose from "mongoose";
import {DBuri} from "./config.js";

export const connectDB = async () => {
    try{
        await mongoose.connect(DBuri);
        console.log(">>> DB is connected")
    }catch (error) {
        console.log(error)
    }
}