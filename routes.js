export const globalRoutes = {
  HOME: "/",
  JOIN: "/join",
  LOGIN: "/login",
  LOGOUT: "/logout",
  SEARCH: "/search",
  GITHUB: "/auth/github",
  GITHUB_CALLBACK: "/auth/github/callback"
};

export const usersRoutes = {
  USERS: "/users",
  USER_DETAILS: function(id) {
    if (id) {
      return `${this.USERS}/${id}`;
    } else {
      return "/:id";
    }
  },
  EDIT_PROFILE: "/edit-profile",
  CHANGE_PASSWORD: "/change-password",
  ME: "/me"
};

export const videosRoutes = {
  VIDEOS: "/videos",
  UPLOAD: "/upload",
  VIDEO_DETAILS: function(id) {
    if (id) {
      return `${this.VIDEOS}/${id}`;
    } else {
      return "/:id";
    }
  },
  EDIT_VIDEO: function(id) {
    if (id) {
      return `${this.VIDEOS}/${id}/edit`;
    } else {
      return "/:id/edit";
    }
  },
  DELETE_VIDEO: function(id) {
    if (id) {
      return `${this.VIDEOS}/${id}/delete`;
    } else {
      return "/:id/delete";
    }
  }
};
