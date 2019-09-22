import passport from "passport";
import mongoose from "mongoose";
import { globalRoutes, usersRoutes } from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: globalRoutes.LOGIN,
  successRedirect: globalRoutes.HOME
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(globalRoutes.HOME);
};

export const getMe = async (req, res) => {
  const { user } = req;
  res.render("userDetails", { pageTitle: "ME", user });
  // const {
  //   user: { _id }
  // } = req;
  // try {
  //   const me = await User.findById(_id);
  //   res.render("userDetails", {
  //     pageTitle: "ME",
  //     user: { ...req.user, name: me.name, email: me.email }
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.redirect(globalRoutes.HOME);
  // }
};

export const userDetails = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetails", { pageTitle: "User Details", user });
  } catch (error) {
    console.log(error);
    res.redirect(globalRoutes.HOME);
  }
};

export const logout = (req, res) => {
  // TODO: Process Log out
  req.logout();
  res.redirect(globalRoutes.HOME);
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file,
    user: { _id, avatarUrl }
  } = req;

  try {
    await User.findByIdAndUpdate(_id, {
      name,
      email,
      avatarUrl: file ? file.path : avatarUrl
    });

    res.redirect(usersRoutes.ME);
  } catch (error) {
    console.log(error);
    // res.render("editProfile", { pageTitle: "Edit Profile" });
    res.redirect(usersRoutes.EDIT_PROFILE);
  }
};

export const getChangePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req;

  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${usersRoutes.CHANGE_PASSWORD}`);
      return;
    }

    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(usersRoutes.ME);
  } catch (error) {
    console.log(error.message);
    res.status(400);
    res.redirect(`/users/${usersRoutes.CHANGE_PASSWORD}`);
  }
};
