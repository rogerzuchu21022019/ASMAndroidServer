const express = require("express");
const findCategoriesController = require("../../../components/category/controllers/FindCategories");
const UserAuthMid = require("../../../middlewares/VerifyToken");
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
    let { title, description, imageUrl, author, categoryID } = req.body;
    imageUrl = "https://loremflickr.com/640/480";
    const news = {
      title,
      description,
      imageUrl,
      author,
    };
    console.log(
      "🚀 ~ file: AddNewsToCategory.js ~ line 37 ~ router.post ~ news",
      news
    );
    const data = await addNewsController(news, categoryID);
    console.log(
      "🚀 ~ file: AddNewsToCategory.js ~ line 43 ~ router.post ~ data",
      data
    );
    res.redirect(`/${navigation.HOME}`);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
