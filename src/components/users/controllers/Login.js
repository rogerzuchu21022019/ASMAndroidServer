const bcrypt = require('bcrypt');
const createError = require("http-errors");
const { signToken, signRefreshToken } = require('../../../utils/server/Jwt.js');
const User = require('../models/User.js');
const loginService = require("../services/Login");

const LoginController = async (email, password) => {
  try {
    const query = { email: email };

    const _user = await loginService(email);

    const isValid = await bcrypt.compare(password, _user.password);
    // if (!isValid) {
    //   throw createError.Unauthorized(`Invalid password`);
    // }

    const token = await signToken(_user.id);
    const refreshToken = await signRefreshToken(_user.id);
    _user.accessToken = token;
    _user.refreshToken = refreshToken;

    const selectFields =
      "_id email name dob imageUrl role phone address createdAt updatedAt";
    const user = await User.findOne(query).select(selectFields);

    const data = {
      token,
      user,
    };


    return data;
  } catch (error) {
    console.log(`error handle :::::::::`, error);
  }
};
module.exports = LoginController;
