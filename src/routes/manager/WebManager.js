/* Check import lại mấy cái router này khi import */
const RouteAdmin = require(`../web/Route_Admin`);
const RouteUser = require(`../web/Route_User`);
const RouteProduct = require(`../web/Route_Product`);

const WebManagerRouter = (app, fixPublic) => {
  const MAIN = "/";
  const USERS = "users";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}${USERS}`;
  const SUB_PRODUCTS = `${MAIN}${PRODUCTS}`;
  /* Admin */
  app.use(MAIN, RouteAdmin.getUsers, fixPublic);
  app.use(MAIN, RouteAdmin.getUserBy, fixPublic);
  /* Users */

  app.use(MAIN, RouteUser.login, fixPublic);
  app.use(MAIN, RouteUser.logout, fixPublic);
  app.use(SUB_USERS, RouteUser.register, fixPublic);
  app.use(SUB_USERS, RouteUser.update, fixPublic);

  /* Products */
  app.use(MAIN, RouteProduct.home, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.analystic, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.chart, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.data, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.category, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.addNews, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.findNews, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.update, fixPublic);
};

module.exports = WebManagerRouter;
