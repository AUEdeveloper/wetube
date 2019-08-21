import express from "express";
import { globalRoutes } from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(globalRoutes.HOME, home);
globalRouter.get(globalRoutes.SEARCH, search);
globalRouter.get(globalRoutes.JOIN, join);
globalRouter.get(globalRoutes.LOGIN, login);
globalRouter.get(globalRoutes.LOGOUT, logout);

export default globalRouter;
