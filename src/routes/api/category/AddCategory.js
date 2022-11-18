const express = require(`express`);
const createCategoryController = require("../../../components/category/controllers/AddCategory");
const router = express.Router();

router.post(`/insert-category`, async (req, res, next) => {
  try {
    const { category } = req.body;
    const data = await createCategoryController(category);
    data
      ? res.status(200).json({
          error: false,
          status: "Suscess",
          isAdded: true,
          status: "Insert Category Successfully",
          data: data,
        })
      : res.status(404).json({
          error: true,
          status: "Fail",
          isAdded: false,
          status: "Insert Category Failed",
          data: {},
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
