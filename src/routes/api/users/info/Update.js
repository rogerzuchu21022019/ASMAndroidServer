const express = require(`express`);
const updatecontroller = require("../../../../components/news/controllers/Update");
const router = express.Router();

router.put(`/:id/update-info`, async (req, res, next) => {
  try {
    const { user } = req.body;
    const { id } = req.params;

    const data = await updatecontroller(id, user);
    data
      ? res.status(200).json({
          status: "Success",
          message: `Update user successfully`,
          error: false,
          isUpdated: true,
          data: data,
        })
      : res.status(400).json({
          status: "Fail",
          message: `Update user fail`,
          error: true,
          isUpdated: false,
          data: null,
        });
  } catch (error) {
    console.log(`Error handler UpdateInfo: ${error}`);
  }
});
module.exports = router;
