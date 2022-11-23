var express = require("express");
var router = express.Router();
const Redis = require("ioredis");
const logoutController = require("../../../../components/users/controllers/Logout");

const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});
const { UserAuthMid } = require(`./../../../../middlewares/VerifyToken.js`);
router.delete("/auth-logout", UserAuthMid, async (req, res, next) => {
  try {
    const user = req.payload;
    const token = req.headers.authorization.split(" ")[1];
    const userLoggedOut = await logoutController(user.user);
    
    
    return res.json({
      message: `Logout success`,
      status: "Success",
      isLoggedIn: false,
      data: null,
    });
  } catch (error) {}
});

module.exports = router;
