const express = require(`express`);
const updateController = require("../../../components/news/controllers/UpdateNews");
const uploadFile = require("../../../utils/api/UploadFile");
const navigation = require("../../../utils/client-web/Navigation");
const findNewsController = require("../../../components/news/controllers/FindNews");



const router = express.Router();


router.get(`/:id/update`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req.cookies;
    const data = await findNewsController(id);
    console.log("🚀 ~ file: UpdateNews.js ~ line 17 ~ router.get ~ data", data)
    res.render("newsDetailEdit", {
      home: navigation.HOME,
      login: navigation.LOGIN,
      logout: navigation.LOGOUT,
      chart: navigation.CHART,
      register: navigation.REGISTER,
      category: navigation.CATEGORY,
      addNews: navigation.ADD_NEWS,
      analystic: navigation.ANALYSTIC,
      data_table: navigation.DATATABLE,
      user:user,
      update: navigation.UPDATE_INFO,
      news: data,
    });
  } catch (error) {
    next(error);
  }
});

router.post(`/:id/update`, async (req, res, next) => {
  try {
    const { id } = req.params;

    let { title, description, imageUrl } = req.body;
    
    imageUrl = await uploadFile(req, imageUrl);

    const news = {
      title,
      description,
      imageUrl,
    };

    const data = await updateController(id, news);
    res.redirect(`/${navigation.HOME}`);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
