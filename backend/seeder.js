import User from "./models/User.js";
import {users} from "./data/users.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDb();

const importData = async()=>{
    try{
        await User.deleteMany()
        await User.insertMany(users);
        console.log("data imported");
        process.exit(1);
    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}


const destroyData = async()=>{
    try{
        await User.deleteMany()

        console.log("data destroyed");
        process.exit(1);
    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1);
    }
}


    if(process.argv[2] == "-d"){
        destroyData()
    }else{
        importData()
    }
