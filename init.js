import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

// Load models ?
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`port is ${PORT}`));
