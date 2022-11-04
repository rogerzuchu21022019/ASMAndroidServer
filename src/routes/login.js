var express = require("express");
var router = express.Router();
const navigation = require(`../utils/Navigation`)

router.all("/auth-login", (req, res, next) => {
  let user = req.body 
  console.log("🚀 ~ file: login.js ~ line 7 ~ router.all ~ user", user)
  // res.redirect(``);

  res.render("login", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
    user:user,
  });
});

module.exports = router;
