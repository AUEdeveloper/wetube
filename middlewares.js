import { globalRoutes, videosRoutes, usersRoutes } from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.globalRoutes = globalRoutes;
  res.locals.videoRoutes = videosRoutes;
  res.locals.userRoutes - usersRoutes;
  next();
};
