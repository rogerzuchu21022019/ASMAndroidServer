
const bcrypt = require(`bcrypt`);
const { signToken, signRefreshToken } = require("../../../utils/server/Jwt");
const logoutService = require("../services/Logout");
const LogoutController = async (user) => {
  try {
    const payload = await logoutService(user);
    return payload
  } catch (error) {}
};
module.exports = LogoutController;
