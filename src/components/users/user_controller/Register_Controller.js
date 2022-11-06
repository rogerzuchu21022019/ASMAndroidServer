const registerService = require("../user_service/Register_Service");

const RegisterController = async (email, password, phone, address, name) => {
  const savedUser = await registerService(
    email,
    password,
    phone,
    address,
    name
  );
  return savedUser;
};

module.exports = RegisterController;
