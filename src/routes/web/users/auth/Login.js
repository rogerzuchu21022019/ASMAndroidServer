var express = require("express");
const LoginController = require("../../../../components/users/controllers/Login_Controller");
var router = express.Router();

const navigation = require(`../../../../utils/client-web/Navigation`);

router.get("/auth-login", async (req, res, next) => {
  // let user = req.body;

  // res.render("login", {
  //   home: navigation.HOME,
  //   login: navigation.LOGIN,
  //   logout: navigation.LOGOUT,
  //   chart: navigation.CHART,
  //   register: navigation.REGISTER,
  //   analystic: navigation.ANALYSTIC,
  //   data_table: navigation.DATATABLE,
  //   user: user.name,
  // });
  try {
    const { email, password } = req.body;

    const data = await LoginController(email, password);

    data.user.accessToken = data.token;
    data.user.refreshToken = data.refreshToken;
    data
      ? res.render("login", {
          home: navigation.HOME,
          login: navigation.LOGIN,
          logout: navigation.LOGOUT,
          chart: navigation.CHART,
          register: navigation.REGISTER,
          analystic: navigation.ANALYSTIC,
          data_table: navigation.DATATABLE,
          user: user.name,
        })
      : res.redirect("/login");
  } catch (error) {}
});

module.exports = router;
