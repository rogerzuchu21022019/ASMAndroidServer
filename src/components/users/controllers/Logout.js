
const bcrypt = require(`bcrypt`);
const logoutService = require("../services/Logout");
const LogoutController = async (refreshToken) => {
  try {
    const refToken = await logoutService(refreshToken);
    return refToken
  } catch (error) {}
};
module.exports = LogoutController;
