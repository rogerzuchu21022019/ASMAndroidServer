var express = require("express");
var router = express.Router();
const navigation = require(`../../../../utils/client-web/Navigation`);
const asyncHandler = require("express-async-handler");
const LoginController = require("../../../../components/users/controllers/Login");
router.post("/auth-login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await LoginController(email, password);
    data
      ? res.status(200).json({
          error: false,
          status: "Login Successfully",
          isLoggedIn: true,
          data: data
        })
      : res.status(404).json({
          error: true,
          status: "Login Failed",
          isLoggedIn: false,
          data: {},
        });
  } catch (error) {}
});

module.exports = router;
