const deleteService = require("../services/DeleteCategory");

const DeleteController = async (id) => {
  try {
    const data = await deleteService(id)
    return data;
  } catch (error) {
    console.log(`Error handler DeleteController: ${error}`);
  }
};
module.exports = DeleteController;
