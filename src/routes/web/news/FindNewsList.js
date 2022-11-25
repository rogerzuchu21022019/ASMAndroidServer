const express = require("express");
const findNewsListController = require("../../../components/news/controllers/FindNewsList");
const { UserAuthMid } = require("../../../middlewares/VerifyToken");

const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();

router.get(`/home`, async (req, res, next) => {
  try {
    const { page } = req.query;
    const { user } = req.cookies;
    const data = await findNewsListController(page);
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
      update: navigation.UPDATE_INFO,
      user:user,
      paginate: {
        totalItems: data.totalDocs,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        newsList: data.docs,
      },
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
