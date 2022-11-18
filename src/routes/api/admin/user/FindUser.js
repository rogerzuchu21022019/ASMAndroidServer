const express = require(`express`);
const findUser = require("../../../../components/admin/controllers/FindUser");
const router = express.Router();
router.get(`/get-user/:email`, async (req, res, next) => {
  try {
    const { email } = req.params;

    const result = await findUser(email);

    result
      ? res.status(200).json({
          error: false,
          status: "Fail",
          message: "Get User By Email Success",
          isLoading: false,
          data: result,
        })
      : res.status(404).json({
          error: true,
          status: "Fail",
          message: "Get User By Email Fail",
          isLoading: true,
          data: {},
        });
  } catch (error) {}
});
module.exports = router;
