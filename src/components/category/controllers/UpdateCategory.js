const updateService = require("../services/UpdateCategory");


const UpdateController = async (id,category) => {
  try {
    const data = await updateService(id, category);
    return data;
  } catch (error) {
    console.log(`Error handler UpdateController: ${error}`);
  }
};
module.exports = UpdateController;
