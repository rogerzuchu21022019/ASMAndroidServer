const createTokenService = require('../services/CreateToken')


const CreateTokenController = async (user,refreshToken) => {
  try {
    const token = await createTokenService(user,refreshToken)
    return token;
  } catch (error) {}
};
module.exports = CreateTokenController;
