const addNewsService = require("../services/AddNewsToCategory");

const AddNewsController = async (newsID, categoryID) => {
  try {
    const news = await addNewsService(newsID, categoryID);
    return news;
  } catch (error) {
    console.log(`Error in AddNewsController: ${error}`);
  }
};
module.exports = AddNewsController;
