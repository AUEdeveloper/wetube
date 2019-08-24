import { globalRoutes } from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //TODO: Register User
    //TODO: Log user in
    res.redirect(globalRoutes.HOME);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  res.redirect(globalRoutes.HOME);
};

export const userDetails = (req, res) => res.send("userDetails");

export const logout = (req, res) => {
  //TODO: Process Log out
  res.redirect(globalRoutes.HOME);
};

//export const users = (req, res) => res.send("users");
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
