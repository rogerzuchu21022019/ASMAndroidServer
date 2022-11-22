var express = require("express");
const createCategoryController = require("../../../../components/category/controllers/CreateCategory");


var router = express.Router();
const navigation = require(`../../../../utils/client-web/Navigation`);

/* GET users listing. */
router.get("/create-category", (req, res, next) => {
  res.render("category", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    category: navigation.CATEGORY,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});

router.post("/create-category", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const category = { name, description };
    const data = await createCategoryController(category);
    console.log("🚀 ~ file: CreateCategory.js ~ line 27 ~ router.post ~ data", data)
    res.redirect(`/${navigation.HOME}`);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
