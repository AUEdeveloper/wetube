import multer from "multer";
import { globalRoutes, videosRoutes, usersRoutes } from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.usersRoutes = usersRoutes;
  res.locals.globalRoutes = globalRoutes;
  res.locals.videosRoutes = videosRoutes;
  res.locals.user = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(globalRoutes.HOME);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(globalRoutes.HOME);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
