const findNewsListService = require("../services/FindNewsList").default;


const FindNewsListController = async (page) => {
  try {
    const data = await findNewsListService(page);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsListController;
