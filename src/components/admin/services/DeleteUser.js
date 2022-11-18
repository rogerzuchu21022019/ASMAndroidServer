const User = require("../../users/models/User");

const DeleteUserService = async (id) => {
  try {
    const query = id;
    const optionsRemove = {
      new: true,
      upsert: true,
    };
    const callbackFun = (error) => {
      console.log(`error removing user`, error);
    };
    return await User.findByIdAndDelete(query, optionsRemove, callbackFun);
  } catch (error) {}
};
module.exports = DeleteUserService;
