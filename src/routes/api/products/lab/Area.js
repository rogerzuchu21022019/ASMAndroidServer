const express = require("express");
const VerifyTokenMiddleware = require("../../../../middlewares/VerifyToken");
const router = express.Router();

router.post(`/area`, (req, res, next) => {
  try {
    const PI = Math.PI;
    const { radius } = req.body;
    console.log("🚀 ~ file: Area.js ~ line 8 ~ router.post ~ radius", radius)
    const S = PI * Math.pow(radius, 2);
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
    console.log(`error handler AREA`, error);
  }
});

router.post(`/query-area`, (req, res, next) => {
  try {
    const PI = Math.PI;
    const { radius } = req.query;
    console.log("🚀 ~ file: Area.js ~ line 31 ~ router.get ~ radius", radius);
    const S = PI * Math.pow(radius, 2);
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
    console.log(`error handler AREA`, error);
  }
});
module.exports = router;
