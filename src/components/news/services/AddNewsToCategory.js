const News = require("../models/News");

const AddNewsService = async (newsID, categoryID) => {
  try {
    const query = { _id: newsID };
    const updateValue = { category: categoryID };
    console.log("🚀 ~ file: AddNewsToCategory.js ~ line 7 ~ AddNewsService ~ newsID", newsID)
    console.log("🚀 ~ file: AddNewsToCategory.js ~ line 8 ~ AddNewsService ~ categoryID", categoryID)
    const optionUpdate = {
      new: true,
      runValidators: true,
      upsert: true,
    };
    const news = await News.findByIdAndUpdate(query, updateValue, optionUpdate);
    return news;
  } catch (error) {
    console.log(`Error in AddNewsService: ${error}`);
  }
};
module.exports = AddNewsService;
