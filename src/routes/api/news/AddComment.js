import express from "express";

const router = express.Router();
import addCommentController from "../../../components/news/controllers/AddComment";

router.post(
  `/:id/add-comment`,
  async (req, res, next) => {
    try {
      const { comment } = req.body;
      const { id } = req.params;
      
      const data = await addCommentController(id, comment);
      data
        ? res.status(200).json({
            status: "Success",
            message: "Comment added successfully",
            error: false,
            isUpdated: true,
            data: data,
          })
        : res.status(400).json({
            status: "Fail",
            message: "Comment not added",
            error: true,
            isUpdated: false,
            data: {},
          });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: `${error.message}`,
        error: true,
        isUpdated: false,
        data: {},
      });
    }
  }
);

module.exports = router;