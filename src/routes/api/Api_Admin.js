
module.exports = {
  getUsers:require("./admin/user/FindUsers"),
  getUser:require("./admin/user/FindUser"),
  updateUser:require("./admin/user/UpdateUser"),
  deleteUser:require("./admin/user/DeleteUser"),

  createCategory: require("./admin/category/CreateCategory"),
  findCategories: require("./admin/category/FindCategories"),
  findCategory: require("./admin/category/FindCategory"),
  deleteCategory: require("./admin/category/DeleteCategory"),
  updateCategory: require("./admin/category/UpdateCategory"),
};

