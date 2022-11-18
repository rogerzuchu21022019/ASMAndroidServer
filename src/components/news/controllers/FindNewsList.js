const findNewsListService = require("../services/FindNewsList");

const FindNewsListController = async () => {
  try {
    const newsList = await findNewsListService()
    return newsList
  } catch (error) {
    console.log(`error handler FIND NEWS LIST: ${error}`);
  }
}
module.exports = FindNewsListController;
