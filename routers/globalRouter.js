import express from "express";
import { globalRoutes } from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(globalRoutes.JOIN, getJoin);
globalRouter.post(globalRoutes.JOIN, postJoin);

globalRouter.get(globalRoutes.LOGIN, getLogin);
globalRouter.post(globalRoutes.LOGIN, postLogin);

globalRouter.get(globalRoutes.HOME, home);
globalRouter.get(globalRoutes.SEARCH, search);
globalRouter.get(globalRoutes.LOGOUT, logout);

export default globalRouter;
