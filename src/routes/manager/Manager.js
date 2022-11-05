const ApiUser = require("../api/Api.User");
const ApiProduct = require(`../api/Api.Product`);

/* Được gọi từ app.js */
const ManagerRouter = (app,fixPublic) => {
    /* Users */
    const result = ApiUser.login
    console.log("🚀 ~ file: Manager.js ~ line 8 ~ ManagerRouter ~ result", result)
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
