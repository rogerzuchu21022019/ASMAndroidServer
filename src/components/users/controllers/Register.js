import bcrypt from "bcrypt";
import registerService from "../services/Register";
import createError from "http-errors";
import UserModel from "../models/User";

const RegisterController = async (_user) => {
  try {
    const __user = await registerService(_user);
    
    // if (__user !== null) {
    //   throw createError(409, `${__user.email} User already exist`);
    // }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(_user.password, salt);
    _user.password = hashPass;

  
    const user = await UserModel.create(_user);

    if (!user) {
      throw createError(409, `User already exist`);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export default RegisterController;
