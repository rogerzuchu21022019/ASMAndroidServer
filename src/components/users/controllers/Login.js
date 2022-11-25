const bcrypt = require('bcrypt');
const createError = require("http-errors");
const { signToken, signRefreshToken } = require('../../../utils/server/Jwt.js');
const generateToken = require('../../../utils/server/TokenGenerate.js');
const User = require('../models/User.js');
const loginService = require("../services/Login");
const createTokenController = require('../../token/controllers/CreateToken');


const LoginController = async (email, password) => {
  try {
    const query = { email: email };

    const _user = await loginService(email);

    const isValid = await bcrypt.compare(password, _user.password);
    // if (!isValid) {
    //   throw createError.Unauthorized(`Invalid password`);
    // }
    

    const { accessToken, refreshToken } = await generateToken(_user)

    await createTokenController(_user,refreshToken)
   
    const data = {
      accessToken,
      _user,
      refreshToken
    };


    return data;
  } catch (error) {
    console.log(`error handle :::::::::`, error);
  }
};
module.exports = LoginController;
