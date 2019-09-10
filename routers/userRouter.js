import express from "express";
import { usersRoutes } from "../routes";
import {
  userDetails,
  getEditProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(usersRoutes.EDIT_PROFILE, onlyPrivate, getEditProfile);
userRouter.get(usersRoutes.CHANGE_PASSWORD, onlyPrivate, changePassword);
userRouter.get(usersRoutes.USER_DETAILS(), userDetails);

export default userRouter;
