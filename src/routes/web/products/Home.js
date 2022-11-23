const express = require("express");
const router = express.Router();
const navigation = require(`../../../utils/client-web/Navigation`);

/* GET home page. */
router.get("/home", async (req, res, next) => {
  const data = await findNewsListController();
  res.render("home", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
    category: navigation.CATEGORY,
    addNews: navigation.ADD_NEWS,
    newsList: data.docs,
  });
});

module.exports = router;
