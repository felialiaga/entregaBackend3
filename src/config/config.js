import { config } from "dotenv";
import mongoose from "mongoose";

config()

mongoose.set('strictQuery', true);

export default {
    app: {
        PORT: process.env.PORT || 8080
    },
    mongo: {
        URL: process.env.MONGO_URL
    }
}