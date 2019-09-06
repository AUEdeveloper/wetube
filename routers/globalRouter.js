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
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(globalRoutes.JOIN, onlyPublic, getJoin);
globalRouter.post(globalRoutes.JOIN, onlyPublic, postJoin, postLogin);

globalRouter.get(globalRoutes.LOGIN, onlyPublic, getLogin);
globalRouter.post(globalRoutes.LOGIN, onlyPublic, postLogin);

globalRouter.get(globalRoutes.HOME, home);
globalRouter.get(globalRoutes.SEARCH, search);
globalRouter.get(globalRoutes.LOGOUT, onlyPublic, logout);

export default globalRouter;
