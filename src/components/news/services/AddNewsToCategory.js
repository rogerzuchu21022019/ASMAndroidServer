const News = require("../models/News");

const AddNewsService = async (news, categoryID) => {
  try {
    const data = await News.create(news)
    const query = { _id: data._id };
    const updateValue = { category: categoryID };
    console.log("🚀 ~ file: AddNewsToCategory.js ~ line 8 ~ AddNewsService ~ data._id", data._id)
    console.log("🚀 ~ file: AddNewsToCategory.js ~ line 8 ~ AddNewsService ~ categoryID", categoryID)
    const optionUpdate = {
      new: true,
      runValidators: true,
      upsert: true,
    };
    const newsData = await News.findByIdAndUpdate(
      query,
      updateValue,
      optionUpdate
    );
    return newsData;
  } catch (error) {
    console.log(`Error in AddNewsService: ${error}`);
  }
};
module.exports = AddNewsService;
