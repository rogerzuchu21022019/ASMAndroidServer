const express = require("express");
const findNewsListController = require("../../../components/news/controllers/FindNewsList");

const router = express.Router();
router.get(`/`, async (req, res, next) => {
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
          message: "Get News List successfully",
          error: false,
          isLoading: false,
          data: paginate,
        })
      : res.json({
          status: "Fail",
          message: "Get News List fail",
          error: true,
          isLoading: true,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
