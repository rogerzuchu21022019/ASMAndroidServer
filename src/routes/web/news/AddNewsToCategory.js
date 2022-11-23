const express = require("express");
const findCategoriesController = require("../../../components/category/controllers/FindCategories");
const {UserAuthMid} = require("../../../middlewares/VerifyToken");
const addNewsController =
  require("../../../components/news/controllers/AddNewsToCategory").default;
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();

router.get(`/add-news`, async (req, res, next) => {
  const data = await findCategoriesController();
  const categories = data.docs;
  const { user } = req.cookies;
  console.log(
    "🚀 ~ file: AddNewsToCategory.js ~ line 13 ~ router.get ~ cookie",
    user
  );
  res.render("addNews", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    category: navigation.CATEGORY,
    addNews: navigation.ADD_NEWS,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
    categories: categories,
    user: user,
  });
});

router.post(`/add-news`, async (req, res, next) => {
  try {
    const { title, description, imageUrl, author, categoryID } = req.body;
    const news = {
      title,
      description,
      imageUrl,
      author,
    };
   
    await addNewsController(news, categoryID);
    res.redirect(`/${navigation.HOME}`);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
