const deleteNewsService = require("../services/DeleteNews");

const DeleteNewsController = async (id) => {
  try {
    return await deleteNewsService(id);
  } catch (error) {
    console.log(`error handler DELETE NEWS: ${error}`);
  }
};
module.exports = DeleteNewsController;
