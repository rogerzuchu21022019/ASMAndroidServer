const Category = require("../models/Category");

const FindCategoryService = async (id) => {
  try {
    const query = { _id: id };

    const data = await Category.findById(query);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindCategoryService;
