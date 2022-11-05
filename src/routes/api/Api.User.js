const loginRouter = require("../api/users/auth/Login");
const registerRouter = require("../api/users/register");
const logoutRouter = require("../api/users/auth/Logout");
const BaseRouter = require("../../utils/BaseUrl");

const MAIN = "api";
const USERS = "users";

const SUB = `${MAIN}/${USERS}`;

const login = BaseRouter(MAIN, loginRouter);
const logout = BaseRouter(MAIN, logoutRouter);
const register = BaseRouter(SUB, registerRouter);

module.exports = {
  login,
  logout,
  register,
};
