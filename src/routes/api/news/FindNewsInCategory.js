const express = require("express");
const findNewsController = require("../../../components/news/controllers/FindNewsInCategory");

const router = express.Router();
router.get(`/:categoryID/news-list`, async (req, res, next) => {
  try {
    const {categoryID} = req.params;
    const data = await findNewsController(categoryID);
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
