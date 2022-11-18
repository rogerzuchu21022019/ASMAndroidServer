const Category = require("../models/Category");

const FindCategoriesService = async () => {
  try {
    const query = { };
    const optionsPaginate = {
      litmit: 10,
      page: 1,
    };
    const data = await Category.paginate(query, optionsPaginate);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindCategoriesService;
