var express = require("express");
var router = express.Router();
const registerController = require("../../../components/users/user_controller/Register_Controller");
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
    const { name, email, phone, password, address, imageUrl, role } = req.body;
    const data = await registerController(
      name,
      email,
      phone,
      password,
      address,
      imageUrl,
      role
    );
    data
      ? res.status(200).json({
          status: `Success`,
          message: "Register Success",
          error: false,
          isRegisted: false,
          data: {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            imageUrl: data.imageUrl,
            dob: data.dob,
            role: data.role,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          },
        })
      : res.status(400).json({
          status: `Fail`,
          message: `Register Fail`,
          error: true,
          isRegisted: true,
        });
  } catch (error) {
    // next(error);
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
