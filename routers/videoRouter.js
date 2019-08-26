import express from "express";
import { videosRoutes } from "../routes";
import {
  videoDetails,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  getUpload,
  postUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(videosRoutes.UPLOAD, getUpload);
videoRouter.post(videosRoutes.UPLOAD, uploadVideo, postUpload);

videoRouter.get(videosRoutes.VIDEO_DETAILS(), videoDetails);

videoRouter.get(videosRoutes.EDIT_VIDEO(), getEditVideo);
videoRouter.post(videosRoutes.EDIT_VIDEO(), postEditVideo);

videoRouter.get(videosRoutes.DELETE_VIDEO(), deleteVideo);

export default videoRouter;
