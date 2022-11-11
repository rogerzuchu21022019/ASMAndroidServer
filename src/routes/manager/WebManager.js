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

  app.use(MAIN, RouteUser.loginRouter, fixPublic);
  app.use(MAIN, RouteUser.logoutRouter, fixPublic);
  app.use(SUB_USERS, RouteUser.registertRouter, fixPublic);

  /* Products */
  app.use(MAIN, RouteProduct.homeRouter, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.analysticRouter, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.chartRouter, fixPublic);
  app.use(SUB_PRODUCTS, RouteProduct.dataRouter, fixPublic);
};

module.exports = WebManagerRouter;
