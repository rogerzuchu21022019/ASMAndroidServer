const { UserVerifyRefMid } = require("../../../middlewares/VerifyToken");
const refreshTokenService = require("../services/RefreshToken");

const RefreshTokenController = async (refreshToken) => {
  try {
    const token = await refreshTokenService(refreshToken);
    const isInclude = token.refreshToken.includes(refreshToken);
    return isInclude;
  } catch (error) {
    console.log(`Error handler RefreshTokenController:`,error);
  }
};
module.exports = RefreshTokenController;
