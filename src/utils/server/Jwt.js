const JWT = require(`jsonwebtoken`);
const Redis = require(`ioredis`);
const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = require("./GenerateKey");
require(`dotenv`).config();
const redis = new Redis({
  port: 6379,
  host: `127.0.0.1`,
});

const signToken = (user) => {
  
  const payload = {
    user,
  };
  const secret = ACCESS_TOKEN_KEY;
  const expiredTimeOptions = {
    expiresIn: "100s",
  };
  return new Promise((resolve, reject) => {
    JWT.sign(payload, secret, expiredTimeOptions, (error, token) => {
      console.log("🚀 ~ file: Jwt.js ~ line 18 ~ JWT.sign ~ token", token);
      error ? reject(error) : resolve(token);
    });
  });
};

const signRefreshToken = (user) => {
  return new Promise((resolve, reject) => {
    const payload = { user };
    const secret = REFRESH_TOKEN_KEY;
    const expiredTimeOptions = {
      expiresIn: 60 * 60 * 24 * 7 * 365,
    };
    const callbackToken = async (error, token) => {
      if (error) reject(error);
      let REFRESH_TOKEN = process.env.REFRESH_TOKEN_REDIS;
      console.log(
        "🚀 ~ file: Jwt.js ~ line 32 ~ callbackToken ~ REFRESH_TOKEN",
        REFRESH_TOKEN
      );
      console.log(
        "🚀 ~ file: Jwt.js ~ line 32 ~ callbackToken ~ REFRESH_TOKEN",
        user
      );
      REFRESH_TOKEN = `${REFRESH_TOKEN}_${user._id}`;
      await redis.set(REFRESH_TOKEN, token, "EX", 60 * 60 * 24 * 7 * 365);
      resolve(token);
    };

    JWT.sign(payload, secret, expiredTimeOptions, callbackToken);
  });
};

module.exports = {
  signToken,
  signRefreshToken,
};
