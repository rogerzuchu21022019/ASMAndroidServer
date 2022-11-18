const deleteUserService = require("../services/DeleteUser");

const DeleteUserController = async (id) => {
  try {
    return await deleteUserService(id);
  } catch (error) {
    console.log(`error handle `, error.message);
  }
};
module.exports = DeleteUserController;
