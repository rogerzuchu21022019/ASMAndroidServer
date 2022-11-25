var express = require("express");
const createTokenController = require("../../../../components/token/controllers/CreateToken");
const refreshTokenController = require("../../../../components/token/controllers/RefreshToken");
const { UserVerifyRefMid } = require("../../../../middlewares/VerifyToken");
const generateToken = require("../../../../utils/server/TokenGenerate");

var router = express.Router();
router.post("/auth-refresh", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const isInclude = await refreshTokenController(refreshToken);
    isInclude
      ? UserVerifyRefMid(refreshToken).then(async (user) => {
          const { accessToken, refreshToken } = await generateToken(user);
          await createTokenController(user, refreshToken);
          res.status(200).json({
            message: `Refresh token success`,
            error: false,
            status: "Success",
            data: {
              accessToken,
              refreshToken,
            },
          });
        })
      : res.status(403).json({
          message: `Refresh token fail`,
          error: true,
          status: "Fail",
          data: null,
        });
  } catch (error) {
    res.json({
      message: `Refresh token fail::::: ${error}`,
      error: true,
      status: "Fail",
      data: null,
    });
  }
});

module.exports = router;
