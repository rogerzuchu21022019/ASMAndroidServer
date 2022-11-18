const News = require("../models/News");

const FindNewsDetailService = async (id) => {
  try {
    const query = { _id: id };
    const newsDetail = await News.findById(query);
    return newsDetail;
  } catch (error) {
    console.log(`error handler FIND NEWS DETAIL: ${error}`);
  }
};
module.exports = FindNewsDetailService;
