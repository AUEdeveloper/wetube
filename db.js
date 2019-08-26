import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log("Server has connected to MongoDB!"))
  .catch(err => console.log(err));
