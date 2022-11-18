const express = require("express");
const findNewsListController = require("../../../components/news/controllers/FindNewsList");

const router = express.Router();

router.get(`/news-list`, async (req, res, next) => {
  try {
    const data = await findNewsListController();

    const paginate = {
      totalItem: data.totalDocs,
      totalPage: data.totalPages,
      currentPage: data.page,
      newsList: data.docs,
    };
    data
      ? res.json({
          status: "Success",
          error: false,
          message: "Get all products successfully",
          isLoadding: false,
          data: paginate,
        })
      : res.json({
          status: "Fail",
          error: true,
          message: "Get all products Fail",
          isLoadding: true,
          data: {},
        });
  } catch (error) {
    console.log(`error handler FIND NEWS LIST: ${error}`);
  }
});
module.exports = router;
