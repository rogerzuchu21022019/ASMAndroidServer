const findUserService = require("../services/FindUser");

const FindUserController = async (email) => {
  const res = await findUserService(email);
  return res;
};

module.exports = FindUserController;
