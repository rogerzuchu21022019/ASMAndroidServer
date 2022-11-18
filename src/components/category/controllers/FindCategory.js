const findCategoryService = require("../services/FindCategory");

const FindCategoryController = async (id) => {
  try {
    const data = await findCategoryService(id);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};
module.exports = FindCategoryController;
