const News = require("../models/News");

const SearchService = async (title, description) => {
  try {
    const query = {
      $or: [{ title: title }, { description: description }],
    };
    const news = await News.find(query);
    return news;
  } catch (error) {
    console.log(`error handler SEARCH NEWS: ${error}`);
  }
};

module.exports = SearchService;
