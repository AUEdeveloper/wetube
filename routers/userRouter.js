import express from "express";
import {
  users,
  userDetails,
  editProfile,
  changePassword
} from "../controllers/userController";
import { usersRoutes } from "../routes";

const userRouter = express.Router();

userRouter.get(usersRoutes.USERS, users);
userRouter.get(usersRoutes.USER_DETAILS, userDetails);
userRouter.get(usersRoutes.EDIT_PROFILE, editProfile);
userRouter.get(usersRoutes.CHANGE_PASSWORD, changePassword);

export default userRouter;
