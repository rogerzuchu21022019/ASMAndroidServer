
const createCategoryService = require("../services/CreateCategory");

const CreateCategoryController = async (category) => {
  try {
    const data = await createCategoryService(category)
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};
module.exports = CreateCategoryController;
