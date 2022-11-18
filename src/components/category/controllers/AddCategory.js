const createCategoryService = require("../services/AddCategory");

const CreateCategoryController = (category) => {
  try {
    const data = createCategoryService(category);
    return data;
  } catch (error) {}
};
module.exports = CreateCategoryController;
