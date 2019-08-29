import multer from "multer";
import { globalRoutes, videosRoutes, usersRoutes } from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.usersRoutes = usersRoutes;
  res.locals.globalRoutes = globalRoutes;
  res.locals.videosRoutes = videosRoutes;
  res.locals.user = {
    id: 1,
    isAuthenticated: false
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
