const express = require("express");
const addNewsController =
  require("../../../components/news/controllers/AddNewsToCategory").default;

const router = express.Router();
router.post(`/add-news`, async (req, res, next) => {
  try {
    const { news, categoryID } = req.body;
    const data = await addNewsController(news, categoryID);
    data
      ? res.json({
          status: "Success",
          message: "Create news successfully",
          error: false,
          isCreated: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Create news fail",
          error: true,
          isCreated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router
