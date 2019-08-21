import express from "express";

//middlewares
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//routes
import { globalRoutes, usersRoutes, videosRoutes } from "./routes";

//routers
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

//set pug as a view engine fro express
app.set("view engine", "pug");

//applying middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

//applying routers
app.use(globalRoutes.HOME, globalRouter);
app.use(usersRoutes.USERS, userRouter);
app.use(videosRoutes.VIDEOS, videoRouter);

export default app;
