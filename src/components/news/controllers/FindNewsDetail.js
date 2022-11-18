const findNewsDetailService = require("../services/FindNewsDetail");

const FindNewsDetailController = async (id) => {
  try {
    const newsDetail = await findNewsDetailService(id);
    return newsDetail;
  } catch (error) {
    console.log(`error handler FIND NEWS DETAIL: ${error}`);
  }
};
module.exports = FindNewsDetailController;
