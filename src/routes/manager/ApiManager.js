/* Check import lại mấy cái  này khi import */
const ApiUser = require("../api/Api_User");
const ApiProduct = require(`../api/Api_Product`);
const ApiAdmin = require(`../api/Api_Admin`);
const ApiCategory = require(`../api/Api_Category`);
const ApiNews = require(`../api/Api_News`);

const ApiManager = (app, fixPublic) => {
  const MAIN = "/api";
  const USERS = "users";
  const NEWS = "news";
  const CATEGORY = "category";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}/${USERS}`;
  const SUB_PRODUCTS = `${MAIN}/${PRODUCTS}`;
  const SUB_NEWS = `${MAIN}/${NEWS}`;
  const SUB_CATEGORY = `${MAIN}/${CATEGORY}`;
  /* Admin */

  app.use(MAIN, ApiAdmin.getUsers, fixPublic);
  app.use(MAIN, ApiAdmin.getUser, fixPublic);
  app.use(MAIN, ApiAdmin.updateUser, fixPublic);
  app.use(MAIN, ApiAdmin.deleteUser, fixPublic);
  /* Users */

  app.use(MAIN, ApiUser.login, fixPublic);
  app.use(MAIN, ApiUser.logout, fixPublic);
  app.use(SUB_USERS, ApiUser.register, fixPublic);

  /* Products */
  app.use(MAIN, ApiProduct.home, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.analystic, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.chart, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.dataTable, fixPublic);

  app.use(SUB_PRODUCTS, ApiProduct.add, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findAll, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findByID, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.search, fixPublic);

  /* Category */
  app.use(SUB_CATEGORY, ApiCategory.createCategory, fixPublic);
  app.use(SUB_CATEGORY, ApiCategory.findCategories, fixPublic);
  app.use(SUB_CATEGORY, ApiCategory.findCategory, fixPublic);
  app.use(SUB_CATEGORY, ApiCategory.updateCategory, fixPublic);
  app.use(SUB_CATEGORY, ApiCategory.deleteCategory, fixPublic);

  /* News */
  app.use(SUB_NEWS, ApiNews.addNewsToCategory, fixPublic);
  app.use(SUB_NEWS, ApiNews.findNewsInCategory, fixPublic);
  app.use(SUB_NEWS, ApiNews.findNewsList, fixPublic);
  app.use(SUB_NEWS, ApiNews.updateNews, fixPublic);
  app.use(SUB_NEWS, ApiNews.deleteNews, fixPublic);

  /* Labs */
  app.use(SUB_PRODUCTS, ApiProduct.area, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.oddNumber, fixPublic);
};

module.exports = ApiManager;
