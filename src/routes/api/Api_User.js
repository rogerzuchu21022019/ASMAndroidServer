
module.exports = {
  login : require("./users/auth/Login"),
  register :require("./users/register/Register").default,
  logout : require("./users/auth/Logout"),
  refresh : require("./users/auth/RefreshToken"),
};
