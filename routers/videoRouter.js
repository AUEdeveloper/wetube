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
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(videosRoutes.UPLOAD, onlyPrivate, getUpload);
videoRouter.post(videosRoutes.UPLOAD, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(videosRoutes.VIDEO_DETAILS(), videoDetails);

videoRouter.get(videosRoutes.EDIT_VIDEO(), onlyPrivate, getEditVideo);
videoRouter.post(videosRoutes.EDIT_VIDEO(), onlyPrivate, postEditVideo);

videoRouter.get(videosRoutes.DELETE_VIDEO(), onlyPrivate, deleteVideo);

export default videoRouter;
