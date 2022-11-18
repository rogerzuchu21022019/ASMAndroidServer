const News = require("../models/News").default;

const AddNewsService = async (news, categoryID) => {
  try {
    // const query1 = {newsID: news.newsID};
    // const updateValue1  ={}
    // const options1Update ={new: true, upsert: true}
    // const dataNew = await News.findOneAndUpdate(
    //   query1,
    //   options1Update,
    //   options1Update
    // );
    // console.log("🚀 ~ file: AddNewsToCategory.js ~ line 14 ~ AddNewsService ~ dataNew", dataNew)

    const data = await News.create(news);
    const query = { _id: data._id };
    const updateValue = { category: categoryID };
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
