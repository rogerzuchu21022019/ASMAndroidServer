const updateServices = require("../services/UpdateNews").default;


const UpdateController = async (id,news) => {
  try {
    const data = await updateServices(id, news);
    return data;
  } catch (error) {
    console.log(`Error handler UpdateController: ${error}`);
  }
};
module.exports = UpdateController;
