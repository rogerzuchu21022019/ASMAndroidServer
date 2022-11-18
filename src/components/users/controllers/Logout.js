
const bcrypt = require(`bcrypt`);
const { signToken, signRefreshToken } = require("../../../utils/server/Jwt");
const logoutService = require("../services/Logout");
const LogoutController = async (accesToken) => {
  try {
    const payload = await logoutService(accesToken);
    // const accessToken = signToken(payload);
    // const refreshToken = signRefreshToken(payload);
    // return { accessToken, refreshToken };
    return payload
  } catch (error) {}
};
module.exports = LogoutController;
