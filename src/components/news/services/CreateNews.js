const NewsModel = require("../models/News");
const createError = require(`http-errors`);

const AddNewsService = async (news) => {
  try {
    // const query = {
    //   _id:news._id
    // };
    // console.log("🚀 ~ file: AddNews.js ~ line 9 ~ AddNewsService ~ query", query)
    // const optionsUpdate = {
    //   upsert: true,
    //   new: true,
    // };
    // const news1 = await NewsModel.findByIdAndUpdate(
    //   query,
    //   {
    //     $set: {
    //       title: news.title,
    //       description: news.description,
    //       imageUrl: news.imageUrl,
    //       categories: news.categories,
    //     },
    //   },
    //   optionsUpdate
    // );
    const news1 = await NewsModel.create(news);
    console.log("🚀 ~ file: AddNews.js ~ line 6 ~ AddNewsService ~ news", news1);
    news1 ? news1 : createError(401);
    return news1;
  } catch (error) {}
};

module.exports = AddNewsService;
