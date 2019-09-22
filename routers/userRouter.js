import express from "express";
import { usersRoutes } from "../routes";
import {
  userDetails,
  getEditProfile,
  getChangePassword,
  postChangePassword,
  postEditProfile
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(usersRoutes.EDIT_PROFILE, onlyPrivate, getEditProfile);
userRouter.post(
  usersRoutes.EDIT_PROFILE,
  onlyPrivate,
  uploadAvatar,
  postEditProfile
);

userRouter.get(usersRoutes.CHANGE_PASSWORD, onlyPrivate, getChangePassword);
userRouter.post(usersRoutes.CHANGE_PASSWORD, onlyPrivate, postChangePassword);

userRouter.get(usersRoutes.USER_DETAILS(), userDetails);

export default userRouter;
