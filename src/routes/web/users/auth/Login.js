var express = require("express");
const LoginController = require("../../../../components/users/controllers/Login");
const UserAuth = require("../../../../middlewares/VerifyToken");
var router = express.Router();

const navigation = require(`../../../../utils/client-web/Navigation`);

router.get("/auth-login", async (req, res, next) => {
  res.render("login", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});

router.post("/auth-login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await LoginController(email, password);
    console.log("🚀 ~ file: Login.js ~ line 25 ~ router.post ~ data", data);

    data._user.accessToken = data.token;
    data._user.refreshToken = data.refreshToken;

    if (data._user) {
      res.cookie(`user`, data._user, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.redirect(`/${navigation.HOME}`);
    }
  } catch (error) {}
});

module.exports = router;
