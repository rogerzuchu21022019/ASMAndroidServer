const searchService = require("../services/SearchNews");

const SearchController = async (title,description) => {
  try {
    const news = await searchService(title, description);
    return news;
  } catch (error) {
    console.log(`Error in SearchNewsController: ${error}`);
  }
};
module.exports = SearchController;
