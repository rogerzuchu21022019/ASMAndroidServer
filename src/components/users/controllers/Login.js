const bcrypt = require('bcrypt');
const createError = require("http-errors");
const { signToken, signRefreshToken } = require('../../../utils/server/Jwt.js');
const User = require('../models/User.js');
const loginService = require("../services/Login");

const LoginController = async (email, password) => {
  try {
    const query = { email: email };

    const _user = await loginService(email);
    console.log("🚀 ~ file: Login.js ~ line 12 ~ LoginController ~ _user", _user)

    const isValid = await bcrypt.compare(password, _user.password);
    // if (!isValid) {
    //   throw createError.Unauthorized(`Invalid password`);
    // }
    

    const token = await signToken(_user);
    const refreshToken = await signRefreshToken(_user);
    _user.accessToken = token;
    _user.refreshToken = refreshToken;

    // const selectFields =
    //   "-password -__v  -accessToken -refreshToken";
    // const user = await User.findOne(query).select(selectFields);
    const data = {
      token,
      _user,
    };


    return data;
  } catch (error) {
    console.log(`error handle :::::::::`, error);
  }
};
module.exports = LoginController;
