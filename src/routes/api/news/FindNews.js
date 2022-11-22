import express from "express";
import findNewsController from "../../../components/news/controllers/FindNews";
const router = express.Router();

router.get(`/:id/detail`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await findNewsController(id);
    data
      ? res.status(200).json({
          status: "Success",
          message: "News found",
          error: false,
          isLoading: false,
          data: data,
        })
      : res.status(404).json({
          status: "Fail",
          message: "News not found",
          error: true,
          isLoading: true,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
