const findUsersService = require("../services/FindUsers");

const FindUsers = async (page, size) => {
  const res = await findUsersService(page, size);
  return res;
};

module.exports = FindUsers;
