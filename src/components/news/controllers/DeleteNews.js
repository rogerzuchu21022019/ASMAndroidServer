const deleteServices = require("../services/DeleteNews").default;


const DeleteController = async (id) => {
  try {
    const data = await deleteServices(id);
    return data;
  } catch (error) {
    console.log(`Error handler DeleteController: ${error}`);
  }
};
module.exports = DeleteController;
