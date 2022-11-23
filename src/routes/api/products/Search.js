const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const SearchController = require("../../../components/products/controller/Search");
const {UserAuthMid} = require("../../../middlewares/VerifyToken");
router.post(`/search`, UserAuthMid, async (req, res, next) => {
  try {
    const { name, brand, description, specials } = req.query;
    const data = await SearchController(name, brand, description, specials);
    data
      ? res.status(200).json({
          status: "Success",
          error: false,
          isLoading: false,
          message: "Search product successfully",
          data: data,
        })
      : res.status(400).json({
          status: "Fail",
          error: true,
          isLoading: true,
          message: "Search product fail",
          data: {},
        });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: true,
      isLoading: true,
      message: "Search product fail",
      data: {},
    });
  }
});
module.exports = router;
