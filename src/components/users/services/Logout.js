const TokenModel = require("../../token/models/Token");

const LogoutService = async (refreshToken) => {
  try {
    const query = { refreshToken: refreshToken };
    const updateValue ={
      $pull: {
        refreshToken: refreshToken,
      },
    }
    const options = { upsert: true, new: true };
    const refToken = await TokenModel.findOneAndUpdate(query, updateValue, options);
    return refToken;


    // const query = { refreshToken: refreshToken };
    // const refToken = await TokenModel.findOne(query);
    // return refToken;
  } catch (error) {
    console.log(`Erorr handler LogoutService: `, error);
  }
};

module.exports = LogoutService;
