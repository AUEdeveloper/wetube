import { globalRoutes, videosRoutes, usersRoutes } from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.usersRoutes = usersRoutes;
  res.locals.globalRoutes = globalRoutes;
  res.locals.videosRoutes = videosRoutes;
  next();
};
