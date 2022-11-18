var express = require("express");
var router = express.Router();
const Redis = require("ioredis");
const logoutController = require("../../../../components/users/controllers/Logout");

const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});
const UserAuthMid = require(`./../../../../middlewares/VerifyToken.js`);
router.delete("/auth-logout",UserAuthMid, async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      console.log(`req.headers.authorization: ${req.headers.authorization}`);
      const token = req.headers.authorization.split(" ")[1];
      console.log(`token: ${token}`);
      if (!token) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      

      const logout = await logoutController(token);
      console.log(
        "🚀 ~ file: Logout.js ~ line 18 ~ router.delete ~ logout",
        logout
      );

      return res.json({
        message: `Logout success`,
        status: "Success",
        isLoggedIn: false,
        data: token,
      });
    }
  } catch (error) {}
});

module.exports = router;
