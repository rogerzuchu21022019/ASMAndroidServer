const findCategoriesService = require("../services/FindCategories");


const FindCategoriesController = async () => {
  try {
    const data = await findCategoriesService();
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};
module.exports = FindCategoriesController;
