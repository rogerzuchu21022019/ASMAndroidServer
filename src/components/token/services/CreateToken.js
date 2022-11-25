const TokenModel = require("../models/Token");

const CreateTokenService = async (user, refreshToken) => {
  try {
    const query = { userId: user._id };
    const setNewValue = {
      $set: {
        userId: user._id,
      },
      $push: {
        refreshToken: refreshToken,
      },
    };
    const options = { upsert: true, new: true };

    const token = await TokenModel.findOneAndUpdate(
      query,
      setNewValue,
      options
    );
    return token;
  } catch (error) {
    console.log(`Error handler CreateTokenService: ${error}`);
  }
};
module.exports = CreateTokenService;
