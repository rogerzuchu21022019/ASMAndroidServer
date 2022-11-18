const express = require("express");
const findCategoriesController = require("../../../../components/category/controllers/FindCategories");

const router = express.Router();
router.get(`/categories`, async (req, res, next) => {
  try {
    const data = await findCategoriesController();
    const paginate = {
      totalItem: data.totalDocs,
      totalPage: data.totalPages,
      currentPage: data.page,
      categories: data.docs,
    };
    data
      ? res.json({
          status: "Success",
          message: "Get Categories successfully",
          error: false,
          isLoading: false,
          data: paginate,
        })
      : res.json({
          status: "Fail",
          message: "Get Categories fail",
          error: true,
          isLoading: true,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
