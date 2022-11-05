const ApiUser = require("../api/Api.User");
const ApiProduct = require(`../api/Api.Product`);

/* Được gọi từ app.js */
const ManagerRouter = (app,fixPublic) => {
    /* Users */
  app.use(ApiUser.login, fixPublic);
  app.use(ApiUser.logout, fixPublic);
  app.use(ApiUser.register, fixPublic);

  /* Products */
  app.use(ApiProduct.home, fixPublic);
  app.use(ApiProduct.chart, fixPublic);
  app.use(ApiProduct.analystic, fixPublic);
  app.use(ApiProduct.data_table, fixPublic);
}

module.exports = ManagerRouter
