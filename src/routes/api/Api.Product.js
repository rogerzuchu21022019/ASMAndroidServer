const homeRouter = require("../api/products/Home");
const chartRouter = require("../api/products/Chart");
const dataTableRouter = require("../api/products/Data-table");
const analysticRouter = require("../api/products/Analystic");
const BaseRouter = require("../../utils/BaseUrl");

const MAIN = "api";
const PRODUCTS = "products";

const SUB = `${MAIN}/${PRODUCTS}`;

const home = BaseRouter(MAIN,homeRouter)
const chart = BaseRouter(SUB,chartRouter)
const data_table = BaseRouter(SUB,dataTableRouter)
const analystic = BaseRouter(SUB,analysticRouter)

module.exports = {
  home,
  chart,
  data_table,
  analystic,
};
