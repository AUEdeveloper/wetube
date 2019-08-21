import express from "express";
import { usersRoutes } from "../routes";
import {
  users,
  userDetails,
  editProfile,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router();

//userRouter.get(usersRoutes.USERS, users);
userRouter.get(usersRoutes.EDIT_PROFILE, editProfile);
userRouter.get(usersRoutes.CHANGE_PASSWORD, changePassword);
userRouter.get(usersRoutes.USER_DETAILS, userDetails);

export default userRouter;
