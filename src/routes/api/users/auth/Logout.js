var express = require("express");
var router = express.Router();
const Redis = require("ioredis");
const TokenModel = require("../../../../components/token/models/Token");
const logoutController = require("../../../../components/users/controllers/Logout");

const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});
const { UserAuthMid } = require(`./../../../../middlewares/VerifyToken.js`);
router.delete("/auth-logout", UserAuthMid, async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const data = await logoutController(refreshToken);
    data
      ? res.status(200).json({
          message: `Logout success`,
          error: false,
          status: "Success",
          isLoggedIn: false,
          data: null,
        })
      : res.status(403).json({
          message: `Logout fail`,
          error: true,
          status: "Fail",
          isLoggedIn: true,
          data: null,
        });
  } catch (error) {
    return res.json({
      message: `Logout fail ${error}`,
      error: true,
      status: "Fail",
      isLoggedIn: true,
      data: null,
    });
  }
});

module.exports = router;
