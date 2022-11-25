var express = require("express");
const findUserController = require("../../../../components/admin/controllers/FindUser");
var router = express.Router();

/* GET users listing. */
router.get("/get-users", async (req, res, next) => {
  try {
    const result = await findUserController();
    res.json({
      error: false,
      message: "Get Success",
      data: result,
    });
  } catch (error) {
    res.json({
      error: true,
      message: "Get Fail",
      data: {},
    });
  }
});
module.exports = router;
