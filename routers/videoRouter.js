import express from "express";
import {
  videos,
  videoDetails,
  editVideo,
  deleteVideo,
  upload
} from "../controllers/videoController";
import { videosRoutes } from "../routes";

const videoRouter = express.Router();

videoRouter.get(videosRoutes.VIDEOS, videos);
videoRouter.get(videosRoutes.VIDEO_DETAILS, videoDetails);
videoRouter.get(videosRoutes.EDIT_VIDEO, editVideo);
videoRouter.get(videosRoutes.DELETE_VIDEO, deleteVideo);
videoRouter.get(videosRoutes.UPLOAD, upload);

export default videoRouter;
