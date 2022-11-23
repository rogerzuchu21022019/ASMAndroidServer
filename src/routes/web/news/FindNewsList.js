const express = require("express");
const findNewsListController = require("../../../components/news/controllers/FindNewsList");
const { UserAuthMid } = require("../../../middlewares/VerifyToken");

const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();

router.get(`/home`, async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
});
module.exports = router;
