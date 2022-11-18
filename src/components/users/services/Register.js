const UserModel = require("../models/User");

const createError = require(`http-errors`);
const RegisterService = async (
  name,
  email,
  phone,
  password,
  address,
  imageUrl,
  role
) => {
  const user = await UserModel.create({
    name,
    email,
    phone,
    password,
    address,
    imageUrl,
    role,
  });

  if (!user) {
    createError(401);
  }
  await UserModel.findOne({
    email,
  });
  // console.log(`isExistahihihihihi`, isExist);
  return user;
};
module.exports = RegisterService;
