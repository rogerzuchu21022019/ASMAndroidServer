const express = require(`express`);
const updateCategoryController = require(`../../../../components/category/controllers/UpdateCategory`);
const router = express.Router();

router.put(`/:id/update-category`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const data = await updateCategoryController(id, category);
    data
      ? res.json({
          status: `Success`,
          message: `Update category successfully`,
          error: false,
          isUpdated: true,
          data: data,
        })
      : res.json({
          status: `Failed`,
          message: `Update category failed`,
          error: true,
          isUpdated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
