const Category = require("../models/Category");

const FindCategoriesService = async () => {
  try {
    const query = {};
    const optionPaginate = {
      page: 1,
      limit: 10,
    };
    const categories = await Category.paginate(query, optionPaginate);
    return categories;
  } catch (error) {
    console.log(`error handler FindCategoriesServices: ${error}`);
  }
};
module.exports = FindCategoriesService;
