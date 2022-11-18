const registerService = require("../services/Register_Service");

const RegisterController = async (
  name,
  email,
  phone,
  password,
  address,
  imageUrl,
  role
) => {
  const savedUser = await registerService(
    name,
    email,
    phone,
    password,
    address,
    imageUrl,
    role
  );
  return savedUser;
};

module.exports = RegisterController;
