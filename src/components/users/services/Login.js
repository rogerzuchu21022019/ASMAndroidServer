const User = require("../models/User");
import createError from "http-errors";

const LoginService = async (email) => {
  try {
    const query = { email: email };
    const user = await User.findOne(query).select("+password");

    if (!user) {
      throw createError(404, `User not found`);
    }
    
    return user;
  } catch (error) {
    console.log(`error handle ::::::::: catch`, error);
    throw createError(404, `User not found`);
  }
};

module.exports = LoginService;
