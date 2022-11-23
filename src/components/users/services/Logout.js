const User = require("../models/User");

const LogoutService = async (user) => {
  try {
    const query = {
      _id: user.id,
    };
    const setNewValue = {
      $set: {
        ...user,
        accessToken: "",
        refreshToken: "",
      },
    };
    const optionsUpdate = {
      new: true,
      upsert: true,
    };
    const _user = await User.findByIdAndUpdate(
      query,
      setNewValue,
      optionsUpdate
    );
    console.log("🚀 ~ file: Logout.js ~ line 24 ~ LogoutService ~ _user", _user)
    return _user;
  } catch (error) {
    console.log(`Erorr handler LogoutService: `, error);
  }
};

module.exports = LogoutService;
