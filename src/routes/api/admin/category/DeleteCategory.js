const express = require(`express`);
const deleteController = require("../../../../components/category/controllers/DeleteCategory");
const router = express.Router();


router.delete(`/:id/delete-category`, async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteController(id);
    return res.status(200).json({
      status: "Success",
      message: "Category deleted successfully",
      error: false,
      isDeleted: true,
      data: null,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
