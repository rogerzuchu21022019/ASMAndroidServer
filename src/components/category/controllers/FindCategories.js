const findCategoriesService = require("../services/FindCategories");

const FindCategoriesController = async () => {
  try {
    
    const categories = await findCategoriesService();
    return categories
  } catch (error) {
    console.log(`Error handler FindCategoriesController: ${error}`);
  }
}

module.exports = FindCategoriesController;
