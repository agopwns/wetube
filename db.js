import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        userNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOPen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌  Error on DB Connection:${error}`);

db.once("open", handleOPen);
db.on("error", handleError);