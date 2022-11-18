const express = require("express");
const findCategoryController = require("../../../components/category/controllers/FindCategory");

const router = express.Router();
router.get(`/:id`, async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await findCategoryController(id);
    data
      ? res.json({
          status: "Success",
          message: "Get Category successfully",
          error: false,
          isLoading: false,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Get Category fail",
          error: true,
          isLoading: true,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
