const findNewsListService = require("../services/FindNewsList");


const FindNewsListController = async () => {
  try {
    const data = await findNewsListService();
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsListController;
