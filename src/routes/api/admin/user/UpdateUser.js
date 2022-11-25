const express = require(`express`);
const asyncHandle = require(`express-async-handler`);
const updateUserController = require("../../../../components/admin/controllers/UpdateUser");
const router = express.Router();
router.put(
  `/update-user/:id`,
  asyncHandle(async (req, res, next) => {
    try {
      const { name, phone, address, imageUrl, dob } = req.body;
      const { id } = req.params;
      const user = { name, phone, address, imageUrl, dob };

      const data = await updateUserController(user, id);
      data
        ? res.json({
            status: "Success",
            message: "Update is successfully",
            error: false,
            isUpdated: true,
            data: data,
          })
        : res.json({
            status: "Fail",
            message: "Update is Fail",
            error: true,
            isUpdated: false,
            data: {},
          });
    } catch (error) {
      next(error);
    }
  })
);
module.exports = router;
