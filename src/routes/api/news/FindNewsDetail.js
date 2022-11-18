const express = require("express");
const findNewsDetailController = require("../../../components/news/controllers/FindNewsDetail");
const router = express.Router();
router.get(`/:id/detail`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await findNewsDetailController(id);
    data
      ? res.json({
          status: "Success",
          error: false,
          message: "Get news detail successfully",
          isLoadding: false,
          data: data,
        })
      : res.json({
          status: "Fail",
          error: true,
          message: "Get news detail Fail",
          isLoadding: true,
          data: {},
        });
  } catch (error) {
    console.log(`error handler FIND NEWS DETAIL: ${error}`);
  }
});
module.exports = router;
