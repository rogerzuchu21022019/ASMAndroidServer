const News = require("../models/NewsModel");

const AddNewsService = async (news, categoryID) => {
  try {
    const query1 = { newsID: news.newsID };
    const setNewValue = {
      $set: news,
    };

    const optionsUpdate = { new: true, upsert: true };
    const _news = await News.findOneAndUpdate(
      query1,
      setNewValue,
      optionsUpdate
    );
    const query = { _id: _news._id };
    const updateValue = { category: categoryID };
    const newsInCategory = await News.findByIdAndUpdate(
      query,
      updateValue,
      optionsUpdate
    );
    return newsInCategory;
  } catch (error) {
    console.log(`Error in AddNewsService: ${error}`);
  }

  
};
module.exports = AddNewsService;
