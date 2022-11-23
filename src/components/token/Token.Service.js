const TokenModel = require("./Token.Model");

const TokenService = async (accessToken, refToken) => {
  try {
    const query = {}
    const token = await TokenModel.find(query);

    return token;
  } catch (error) {}
};
module.exports = TokenService;
