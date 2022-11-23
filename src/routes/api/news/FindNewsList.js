const express = require("express");
const findNewsListController = require("../../../components/news/controllers/FindNewsList");
const { UserAuthMid } = require("../../../middlewares/VerifyToken");

const router = express.Router();
router.get(`/`, UserAuthMid, async (req, res, next) => {
  try {
    const user = req.payload
    const header = req.headers
    console.log("🚀 ~ file: FindNewsList.js ~ line 10 ~ router.get ~ header", header)
    console.log(`user header = `,user);
    const data = await findNewsListController();
    const paginate = {
      totalItem: data.totalDocs,
      totalPage: data.totalPages,
      currentPage: data.page,
      newsList: data.docs,
    };
    return res.json({
      status: "Success",
      message: "Get News List successfully",
      error: false,
      isLoading: false,
      data: paginate,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      message: "Get News List fail",
      error: true,
      isLoading: true,
      data: null,
    });
  }
});
module.exports = router;
