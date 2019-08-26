import "./db";
import app from "./app";
import dotenv from "dotenv";

//Load models ?
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`port is ${PORT}`));
