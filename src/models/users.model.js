import mongoose from "mongoose";

const userCollection ='Users'
const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email: String,
    age: String,
    password:String,
    rol: String,
})
const userModel= mongoose.model(userCollection,userSchema)
export default userModel;