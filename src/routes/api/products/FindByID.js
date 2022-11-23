const express = require("express");
const FindByIDController = require("../../../components/products/controller/FindByID");
const {UserAuthMid} = require("../../../middlewares/VerifyToken");
const router = express.Router();
require("dotenv").config();
const Redis = require(`ioredis`);
const { RedisHelper } = require("../../../utils/server/RedisHelper");
const redis = new Redis({
  port: process.env.PORT_REDIS,
  host: process.env.HOST_REDIS,
});

router.get("/:productID", UserAuthMid, async (req, res) => {
  try {
    const { productID } = req.params;
    let cacheRedis = await redis.get(`${productID}`);

    if (cacheRedis) {
      console.log(`Redis hit , get data from redis :>>>>>>>>>>>>>>>`);
      cacheRedis = JSON.parse(cacheRedis);
      res.status(200).json({
        status: "Success",
        error: false,
        isLoadding: false,
        message: "Get product successfully",
        data: cacheRedis,
      });
    } else {
      const data = await FindByIDController(productID);
      console.log(
        `Redis miss, get data from mongodb and set to Redis :>>>>>>>>>>>>>>>`
      );
      await redis.set(
        `${productID}`,
        JSON.stringify(data),
        RedisHelper.EXPIRED_KEYWORD,
        RedisHelper.EXPIRED_TIME
      );
      data
        ? res.status(200).json({
            status: "Success",
            error: false,
            isLoadding: false,
            message: "Get product by id successfully",
            data: data,
          })
        : res.status(400).json({
            status: "Fail",
            error: true,
            isLoadding: true,
            message: "Get product by id fail",
            data: {},
          });
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: FindByID.js ~ line 9 ~ FindByIDController ~ error handler",
      error.message
    );
  }
});

module.exports = router;
