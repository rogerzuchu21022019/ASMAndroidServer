var express = require("express");
var router = express.Router();
const navigation = require(`../utils/Navigation`);
/* GET home page. */
router.all("/home", function (req, res, next) {
 
  res.render("home", {
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
