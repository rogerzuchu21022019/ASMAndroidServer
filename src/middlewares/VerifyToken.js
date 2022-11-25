const JWT = require(`jsonwebtoken`);
const asyncHandler = require(`express-async-handler`);
const createError = require(`http-errors`);
require(`dotenv`).config();
const TokenModel = require("../components/token/models/Token");


const {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} = require("../utils/server/GenerateKey");
const Redis = require(`ioredis`);
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});

const UserAuthMid = (req, res, next) => {
  // verify token middleware bearer
  if (!req.headers["authorization"]) {
    return next(createError(401, `Unauthorized`));
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  console.log("🚀 ~ file: VerifyToken.js ~ line 25 ~ UserAuthMid ~ token", token)
  if (!token) {
    res.sendStatus(401);
  }

  JWT.verify(token, ACCESS_TOKEN_KEY, (error, user) => {
    if (error) {
      return next(createError.Unauthorized());
    }
    console.log(
      "🚀 ~ file: VerifyToken.js ~ line 27 ~ JWT.verify ~ user",
      user
    );
    req.payload = user;
    next();
  });
};

const UserAuthRefreshMid = (refreshToken) => {
  return new Promise((resolve, reject) => {
    JWT.verify(refreshToken, REFRESH_TOKEN_KEY, (error, user) => {
      if (error) reject(error);
      let REFRESH_TOKEN = process.env.REFRESH_TOKEN_REDIS;
      REFRESH_TOKEN = `${REFRESH_TOKEN}_${user.userID}`;
      const redisCLient = redis
        .get(REFRESH_TOKEN)
        .then(resolve(user))
        .catch((err) => reject(err));
      console.log(
        "🚀 ~ file: VerifyToken.js ~ line 39 ~ JWT.verify ~ redisCLient",
        redisCLient
      );
    });
  });
};

const UserVerifyRefMid = (refreshToken) => {
  return new Promise((resolve, reject) => {
    JWT.verify(refreshToken, REFRESH_TOKEN_KEY, (error, tokenDetails) => {
      if (error)
        return reject({ error: true, message: "Invalid refresh token" });
      resolve(tokenDetails);
    });
  });
};
module.exports = { UserAuthMid, UserAuthRefreshMid,UserVerifyRefMid };
