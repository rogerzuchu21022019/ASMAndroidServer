const express = require(`express`);
const DeleteNewsController = require(`../../../components/news/controllers/DeleteNews`);
const router = express.Router();

router.delete(`/:id/delete`, async (req, res, next) => {
  try {
    const { id } = req.params;
    await DeleteNewsController(id);
    return res.json({
      status: `Success`,
      message: `Delete news successfully`,
      error: false,
      isDeleted: true,
      data: null,
    });
  } catch (error) {
    return res.json({
      status: `Fail`,
      message: `Delete news fail ${error}`,
      error: true,
      isDeleted: false,
    });
  }
});
module.exports = router;
