const User = require("../../users/models/User");

const FindUserService = async (email) => {
  const query = {
    email,
  };

  const res = await User.findOne(query);

  return res;
};

module.exports = FindUserService;
