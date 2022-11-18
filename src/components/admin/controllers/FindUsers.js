const findUserService = require("../services/FindUsers");

const FindUsers = async (page, size) => {
  const res = await findUserService(page, size);
  return res;
};

module.exports = FindUsers;
