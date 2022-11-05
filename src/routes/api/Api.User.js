const loginRouter = require("../api/users/auth/Login");
const registerRouter = require("../api/users/register");
const logoutRouter = require("../api/users/auth/Logout");
const BaseRouter = require("../../utils/BaseUrl");

const MAIN = "api";
const USERS = "users";

const SUB = `${MAIN}/${USERS}`;

const login = BaseRouter(MAIN, loginRouter.stack[0].route.path);
console.log("🚀 ~ file: Api.User.js ~ line 12 ~ login", login)

const logout = BaseRouter(MAIN, logoutRouter.stack[0].route.path);
const register = BaseRouter(SUB, registerRouter.stack[0].route.path);

module.exports = {
  login,
  logout,
  register,
};
