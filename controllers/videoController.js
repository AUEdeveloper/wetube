export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;

  res.render("search", { pageTitle: "Search", searchingFor });
};

export const videos = (req, res) => res.send("videos", { pageTitle: "Videos" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetails = (req, res) =>
  res.send("videoDetails", { pageTitle: "Video Details" });

export const editVideo = (req, res) =>
  res.send("editVideo", { pageTitle: "Edit video" });

export const deleteVideo = (req, res) =>
  res.send("deleteVideo", { pageTitle: "Delete video" });
