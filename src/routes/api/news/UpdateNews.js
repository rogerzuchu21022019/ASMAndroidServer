const express = require(`express`);
const UpdateNewsController = require(`../../../components/news/controllers/UpdateNews`);
const router = express.Router();

router.put(`/:id/update`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { news } = req.body;
    const data = await UpdateNewsController(id, news);
    data
      ? res.json({
          status: `Success`,
          message: `Update news successfully`,
          error: false,
          isUpdated: true,
          data: data,
        })
      : res.json({
          status: `Failed`,
          message: `Update news failed`,
          error: true,
          isUpdated: false,
          data: null,
        });
  } catch (error) {
    res.json({
      status: `Failed`,
      message: `Update news failed`,
      error: true,
      isUpdated: false,
      data: null,
    });
  }
});
module.exports = router;
