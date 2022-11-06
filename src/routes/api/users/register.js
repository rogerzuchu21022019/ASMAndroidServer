var express = require("express");
const registerController = require("../../../components/users/user_controller/Register_Controller");
var router = express.Router();
const navigation = require(`../../../utils/client-web/Navigation`);

/* GET users listing. */
router.get("/register", (req, res, next) => {
  res.render("register", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});

router.post("/register", async (req, res, next) => {
  try {
    const { email, password, address, name, phone } = req.body;
    const data = await registerController(
      email,
      password,
      address,
      name,
      phone
    );
    return res.status(200).json({
      message: " Register Success",
      error: false,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
});

// router.all("/auth-login", async (req, res, next) => {
//   try {
//     const { email, password, address, name, phone } = req.body;

//     const data = await UserController(email, password, address, name, phone);
//     console.log("🚀 ~ file: register.js ~ line 42 ~ router.post ~ data", data)
//     res.render("login", {
//       home: navigation.HOME,
//       login: navigation.LOGIN,
//       logout: navigation.LOGOUT,
//       chart: navigation.CHART,
//       register: navigation.REGISTER,
//       analystic: navigation.ANALYSTIC,
//       data_table: navigation.DATATABLE,
//     });
//   } catch (error) {}
// });

module.exports = router;
