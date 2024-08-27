import { DotenvConfigOptions } from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});
