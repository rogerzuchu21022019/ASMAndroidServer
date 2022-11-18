const JWT = require(`jsonwebtoken`);
const asyncHandler = require(`express-async-handler`);
const createError = require(`http-errors`);
require(`dotenv`).config();
const {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} = require("../utils/server/GenerateKey");
const Redis = require(`ioredis`);
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});

const UserAuthMid = asyncHandler((req, res, next) => {
  // verify token middleware bearer
  if (!req.headers.authorization) {
    return next(createError(401, `Unauthorized`));
  }
  const authHeader = req.headers.authorization;
  const bearer = authHeader.split(` `);
  const token = bearer[1];
  const callbackToken = (error, user) => {
    (req.user = user), next();
  };

  JWT.verify(token, ACCESS_TOKEN_KEY, callbackToken);
});

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
module.exports = [UserAuthMid, UserAuthRefreshMid];
