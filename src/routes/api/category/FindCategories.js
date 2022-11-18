const express = require(`express`);
const findCategoriesController = require(`../../../components/category/controllers/FindCategories`);
const router = express.Router();

router.get(`/categories`, async (req, res, next) => {
  try {
    const data = await findCategoriesController();
    const paginate = {
      page: data.page,
      limit: data.limit,
      totalDocs: data.totalDocs,
      totalPages: data.totalPages,
      categories : data.docs
    };
    data
      ? res.status(200).json({
          error: false,
          status: "Suscess",
          isLoadings: false,
          message: "Load Categories Successfully",
          data: paginate,
        })
      : res.status(404).json({
          error: true,
          status: "Fail",
          isLoadings: false,
          message: "Load Categories Failed",
          data: {},
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
