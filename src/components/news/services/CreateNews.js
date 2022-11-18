const News = require("../models/News");

const CreateNewsService = async (news) => {
  try {
    const data = await News.create(news);
    return data;
  } catch (error) {
    console.log(`Error handler CreateNews: ${error}`);
  }
};
module.exports = CreateNewsService;
