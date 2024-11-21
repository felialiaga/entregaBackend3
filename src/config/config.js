import { config } from "dotenv";

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