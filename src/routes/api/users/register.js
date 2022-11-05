var express = require("express");
var router = express.Router();
const navigation = require(`../../../utils/client-web/Navigation`);

/* GET users listing. */
router.get("/register", (req, res, next) => {
  res.render("register", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});

module.exports = router;
