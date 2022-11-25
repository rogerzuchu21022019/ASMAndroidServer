const express = require("express");
const navigation = require("../../../utils/client-web/Navigation");
const findNewsController = require("../../../components/news/controllers/FindNews");

const router = express.Router();

router.get(`/detail/:id`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req.cookies;
    const data = await findNewsController(id);
    res.render("newsDetail", {
      home: navigation.HOME,
      login: navigation.LOGIN,
      logout: navigation.LOGOUT,
      chart: navigation.CHART,
      register: navigation.REGISTER,
      category: navigation.CATEGORY,
      addNews: navigation.ADD_NEWS,
      analystic: navigation.ANALYSTIC,
      data_table: navigation.DATATABLE,
      update: navigation.UPDATE_INFO,
      user:user,
      news: data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
