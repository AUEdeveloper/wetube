import express from "express";
import passport from "passport";
import { globalRoutes, usersRoutes } from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogIn,
  getMe
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(globalRoutes.JOIN, onlyPublic, getJoin);
globalRouter.post(globalRoutes.JOIN, onlyPublic, postJoin, postLogin);

globalRouter.get(globalRoutes.LOGIN, onlyPublic, getLogin);
globalRouter.post(globalRoutes.LOGIN, onlyPublic, postLogin);

globalRouter.get(globalRoutes.HOME, home);
globalRouter.get(globalRoutes.SEARCH, search);
globalRouter.get(globalRoutes.LOGOUT, onlyPrivate, logout);

globalRouter.get(globalRoutes.GITHUB, githubLogin);

globalRouter.get(
  globalRoutes.GITHUB_CALLBACK,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(usersRoutes.ME, getMe);

export default globalRouter;
