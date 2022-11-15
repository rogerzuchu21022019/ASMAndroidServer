const express = require("express");
const router = express.Router();

router.post(`/area`, (req,res,next) => {
  try {
    const PI = 3.14;
    const {R} = req.body;
    const S = PI * R * R;
    S
      ? res.status(200).json({
          status: "Success",
          error: false,
          message: "Area of circle",
          data: S,
        })
      : res.status(400).json({
          status: "Fail",
          error: true,
          message: "Area of circle",
          data: null,
        });
  } catch (error) {
    console.log(`error handler AREA`,error);
  }
}
)
module.exports = router;