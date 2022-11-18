const express = require("express");
const searchNewsController = require("../../../components/news/controllers/SearchNews");
const router = express.Router();

router.post(`/search`, async (req, res, next) => {
  try {
    const { title, description } = req.query;
    console.log("🚀 ~ file: SearchNews.js ~ line 8 ~ router.post ~ title", title)
    const data = await searchNewsController(title, description);
    data
      ? res.status(200).json({
          status: "Success",
          message: "Search Successfully",
          error: false,
          isLoadding: false,
          data: data,
        })
      : res.status(400).json({
          status: "Failed",
          message: "Search Failed",
          error: true,
          isLoadding: true,
          data: null,
        });
  } catch (error) {
    console.log(`Error in searchNewsController: ${error}`);
  }
});
module.exports = router;
