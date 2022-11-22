import UserModel from "../models/User";

import createError from "http-errors";

const RegisterService = async (user) => {
  try {
    const query = { email: user.email };
    const __user = await UserModel.findOne(query);
    console.log(
      "🚀 ~ file: Register.js ~ line 10 ~ RegisterService ~ __user",
      __user
    );

    return __user;
  } catch (error) {
    console.log(`Error handler RegisterService: ${error}`);
    throw error;
  }
};
export default RegisterService;
