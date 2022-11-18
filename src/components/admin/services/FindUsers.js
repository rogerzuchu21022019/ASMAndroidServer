const User = require("../../users/models/User");

const FindUserService = async () => {
  /*  Query sort list reverse in mongodb  */
  const query = {};
  const sortReverseArray = {
    sort: {
      createdAt: -1,
    },
    select: `name email phone address imageUrl role createdAt updatedAt`,
  };
  const res = await User.find(query, {}, sortReverseArray);
  return res;
  //
};

module.exports = FindUserService;
