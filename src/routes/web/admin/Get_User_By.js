const express = require(`express`);
const findUserController = require("../../../components/admin/controllers/FindUser");

const router = express.Router();
router.get(`/get-user/`, async (req, res, next) => {
  try {
    const { email, role } = req.query;
    const result = await findUserController(email, role);
    res.json({
      error: false,
      message: "Get User By Email Success",
      data: result,
    });
  } catch (error) {
    res.json({
      error: true,
      message: "Get User By Email Fail",
      data: {},
    });
  }
});
module.exports = router;
