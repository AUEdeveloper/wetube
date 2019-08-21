export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.send("logout");
export const users = (req, res) => res.send("users");
export const userDetails = (req, res) => res.send("userDetails");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.send("changePassword");
