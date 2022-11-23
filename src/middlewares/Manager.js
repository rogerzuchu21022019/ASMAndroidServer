const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const session = require(`express-session`);
const Redis = require(`ioredis`);
const Redis_Store = require(`connect-redis`)(session);
const fileUpload = require("express-fileupload");

const redisClient = new Redis();
const cors = require(`cors`);

const ManagerMiddleware = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.use(cors());
  app.use(
    fileUpload({
      useTempFiles: true,
      limits: { fileSize: 50 * 1024 * 1024 },
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(
    session({
      secret: "keyboard cat",
      store: new Redis_Store({ client: redisClient }),
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true, maxAge: 5 * 60 * 1000, httpOnly: true },
    })
  );

  const fixPublic = express.static(path.join(__dirname, "public"));
  app.use(fixPublic);
};

module.exports = ManagerMiddleware;
