import { videos } from "../db";
import { videosRoutes } from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;

  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  //TODO: Upload and save video
  res.redirect(videosRoutes.VIDEO_DETAILS(3234));
};

export const videoDetails = (req, res) =>
  res.render("videoDetails", { pageTitle: "Video Details" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit video" });

export const deleteVideo = (req, res) =>
  res.send("deleteVideo", { pageTitle: "Delete video" });
