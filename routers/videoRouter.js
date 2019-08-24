import express from "express";
import { videosRoutes } from "../routes";
import {
  videoDetails,
  editVideo,
  deleteVideo,
  getUpload,
  postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(videosRoutes.UPLOAD, getUpload);
videoRouter.post(videosRoutes.UPLOAD, postUpload);

videoRouter.get(videosRoutes.VIDEO_DETAILS(), videoDetails);
videoRouter.get(videosRoutes.EDIT_VIDEO, editVideo);
videoRouter.get(videosRoutes.DELETE_VIDEO, deleteVideo);

export default videoRouter;
