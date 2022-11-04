var express = require('express');
var router = express.Router();
const navigation = require(`../utils/Navigation`)

/* GET users listing. */
router.get('/data-table', function(req, res, next) {
  res.render('data-table',{
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});

module.exports = router;
