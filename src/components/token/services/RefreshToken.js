const TokenModel = require("../models/Token");

const RefreshTokenService = async ( refreshToken) => {
  try {
    const query = { refreshToken: refreshToken };

    const token = await TokenModel.findOne(
      query,
    );
    return token;
  } catch (error) {
    console.log(`Error handler RefreshTokenService: ${error}`);
  }
};
module.exports = RefreshTokenService;
