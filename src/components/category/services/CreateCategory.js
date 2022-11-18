const Category = require("../models/Category");

const CreateCategoryService = async (category) => {
  try {
    const data = await Category.create(category);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};
module.exports = CreateCategoryService;
