const express = require("express");
const deleteNewsController = require("../../../components/news/controllers/DeleteNews");
const router = express.Router();

router.delete(`/:id/delete`, async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteNewsController(id);
    return res.status(200).json({
        status: "Success",
        error: false,
        message: "Delete news successfully",
        idDeleted: true,
    })
  } catch (error) {
    next(error)
  }
});
module.exports = router;
