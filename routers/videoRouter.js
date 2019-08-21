import express from "express";
import { videosRoutes } from "../routes";
import {
  videos,
  videoDetails,
  editVideo,
  deleteVideo,
  upload
} from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get(videosRoutes.VIDEOS, videos);
videoRouter.get(videosRoutes.UPLOAD, upload);
videoRouter.get(videosRoutes.VIDEO_DETAILS, videoDetails);
videoRouter.get(videosRoutes.EDIT_VIDEO, editVideo);
videoRouter.get(videosRoutes.DELETE_VIDEO, deleteVideo);

export default videoRouter;
