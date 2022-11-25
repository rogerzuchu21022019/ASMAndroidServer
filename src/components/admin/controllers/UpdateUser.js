const updateService = require("../services/UpdateUser");

const UpdateController = async (user, id) => {
  try {
    const response = await updateService(user, id);
    return response;
  } catch (error) {}
};

module.exports = UpdateController;
