const UserModel = require("../User_Model");

const createError = require(`http-errors`);
const RegisterService = (email, password, phone, address, name) => {
  const user = UserModel.create({
    email,
    password,
    phone,
    address,
    name,
  });
  if (user == null) {
    createError(400);
  }
  if (!user) {
    createError(401);
  }
  UserModel.findOne({
    email,
  })
    .then((err, data) => console.log("data pending", data))
    .then((err, data) => console.log("data Fulfilled", data))
    .catch();
  // console.log(`isExistahihihihihi`, isExist);
  return user;
};
module.exports = RegisterService;
