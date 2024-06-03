import mongoose from "mongoose";

// user schema
const userSchema= new mongoose.Schema({



},{timestamps:true});

// user model
export const User = mongoose.model("User", userSchema);