const express = require(`express`);
const asyncHandle = require(`express-async-handler`);
const FindUserController = require("../../../../components/admin/controllers/FindUser");
const updateUserController = require("../../../../components/admin/controllers/UpdateUser");
const FindUserService = require("../../../../components/admin/services/FindUsers");
const uploadFile = require("../../../../utils/api/UploadFile");
const navigation = require("../../../../utils/client-web/Navigation");

const router = express.Router();

router.get(
  `/update-info`,
  asyncHandle(async (req, res, next) => {
    try {
      const { user } = req.cookies;
      // const user = await FindUserController(email);

      res.render("updateInfo", {
        home: navigation.HOME,
        login: navigation.LOGIN,
        logout: navigation.LOGOUT,
        chart: navigation.CHART,
        register: navigation.REGISTER,
        analystic: navigation.ANALYSTIC,
        data_table: navigation.DATATABLE,
        category: navigation.CATEGORY,
        update: navigation.UPDATE_INFO,
        addNews: navigation.ADD_NEWS,
        user: user,
      });
    } catch (error) {
      next(error);
    }
  })
);

router.post(
  `/update-info/:id`,
  asyncHandle(async (req, res, next) => {
    try {
      let { name, phone, address, imageUrl, dob } = req.body;
      const { id } = req.params;
      imageUrl = await uploadFile(req, imageUrl);
      const user = { name, phone, address, imageUrl, dob };
      const data = await updateUserController(user, id);
      res.cookie(`user`, data);
      res.redirect(`/${navigation.HOME}`);
    } catch (error) {
      next(error);
    }
  })
);
module.exports = router;
