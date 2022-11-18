const User = require("../../users/models/User");

const GetUserByService = async (email) => {
  const query = {
    email,
  };

  const res = await User.findOne(query);

  return res;
};

module.exports = GetUserByService;
