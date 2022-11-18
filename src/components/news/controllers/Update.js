const updateService = require("../../users/services/Update");

const Updatecontroller = async (id,user) => {
  try {
    const userUpdate = await updateService(id,user);
    return userUpdate;
  } catch (error) {
    console.log(`Error handler UpdateController: ${error}`);
  }
}
module.exports = Updatecontroller;
