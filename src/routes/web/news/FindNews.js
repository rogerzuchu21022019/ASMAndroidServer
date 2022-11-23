const express = require("express");
const findCategoriesController = require("../../../components/category/controllers/FindCategories");
const navigation = require("../../../utils/client-web/Navigation");
const updateController = require("../../../components/news/controllers/UpdateNews");
const findNewsController = require("../../../components/news/controllers/FindNews");
const UploadFile = require("../../../utils/client-web/UploadFile");
const router = express.Router();

router.get(`/:id/detail`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await findNewsController(id);
    const category = await findCategoriesController();
    res.render("detailNews", {
      home: navigation.HOME,
      login: navigation.LOGIN,
      logout: navigation.LOGOUT,
      chart: navigation.CHART,
      register: navigation.REGISTER,
      category: navigation.CATEGORY,
      addNews: navigation.ADD_NEWS,
      analystic: navigation.ANALYSTIC,
      data_table: navigation.DATATABLE,
      news: data,
    });
  } catch (error) {
    next(error);
  }
});

router.post(`/:id/update`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title,description,imageUrl } = req.body;
    const news = {
      title,
      description,
      imageUrl,
    }

    const data = await updateController(id, news);
    console.log("🚀 ~ file: FindNews.js ~ line 35 ~ router.put ~ data", data)
    res.redirect(`/${navigation.HOME}`)
  } catch (error) {
    next(error);
  }
});
module.exports = router;
