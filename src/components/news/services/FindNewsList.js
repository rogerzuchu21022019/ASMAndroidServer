const NewsModel = require("../models/News");

const FindNewsListService = async () => {
  const query = {};
  const optionPaginate = {
    page: 1,
    limit: 10,
  };
  const news = await NewsModel.paginate(query, optionPaginate);
  return news;
};
module.exports = FindNewsListService;
