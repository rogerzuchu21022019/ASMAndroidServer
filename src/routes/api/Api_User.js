const loginRouter = require("./users/auth/Login");
const registerRouter = require("../api/users/Register");
const logoutRouter = require("./users/auth/Logout");

module.exports = {
  loginRouter,
  logoutRouter,
  registerRouter,
};
