const User_Model = require("../models/User_Model");

const LogoutService = async (token) => {
  const query = { accessToken: token };
  const replaceToken = { token: "" };
  const users = await User_Model.findOneAndReplace(query, replaceToken);
  console.log("🚀 ~ file: Logout.js ~ line 7 ~ LogoutService ~ users", users)
  return users
};

module.exports = LogoutService;
