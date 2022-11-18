/* Check import lại mấy cái  này khi import */
const ApiUser = require("../api/Api_User");
const ApiProduct = require(`../api/Api_Product`);
const ApiAdmin = require(`../api/Api_Admin`);
const ApiNews = require("../api/Api_News");

const ApiManager = (app, fixPublic) => {
  const MAIN = "/api";
  const USERS = "users";
  const NEWS = "news";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}/${USERS}`;
  const SUB_PRODUCTS = `${MAIN}/${PRODUCTS}`;
  const SUB_NEWS = `${MAIN}/${NEWS}`;
  /* Admin */

  app.use(MAIN, ApiAdmin.getUsers, fixPublic);
  app.use(MAIN, ApiAdmin.getUser, fixPublic);
  app.use(MAIN, ApiAdmin.updateUser, fixPublic);
  app.use(MAIN, ApiAdmin.deleteUser, fixPublic);
  /* Users */

  app.use(MAIN, ApiUser.login, fixPublic);
  app.use(MAIN, ApiUser.logout, fixPublic);
  app.use(SUB_USERS, ApiUser.register, fixPublic);
  app.use(SUB_USERS, ApiUser.update, fixPublic);

  /* Products */
  app.use(MAIN, ApiProduct.home, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.analystic, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.chart, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.dataTable, fixPublic);

  app.use(SUB_PRODUCTS, ApiProduct.add, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findAll, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findByID, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.search, fixPublic);

  /* News */
  app.use(SUB_NEWS, ApiNews.addNews, fixPublic);
  app.use(SUB_NEWS, ApiNews.newsList, fixPublic);
  app.use(SUB_NEWS, ApiNews.newsDetail, fixPublic);
  app.use(SUB_NEWS, ApiNews.deleteNews, fixPublic);
  app.use(SUB_NEWS, ApiNews.searchNews, fixPublic);
  app.use(SUB_NEWS, ApiNews.media, fixPublic);

  /* Category */
  app.use(SUB_NEWS, ApiNews.insertCategory, fixPublic);
  app.use(SUB_NEWS, ApiNews.categories, fixPublic);

  /* Labs */
  app.use(SUB_PRODUCTS, ApiProduct.area, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.oddNumber, fixPublic);
};

module.exports = ApiManager;
