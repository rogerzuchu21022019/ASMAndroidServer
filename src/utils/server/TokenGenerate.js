const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = require("./GenerateKey");

const generateToken = async (user) => {
  try {
    const payload = {
      user,
    };
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_KEY, {
      expiresIn: "30s",
    });

    const refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, {
      expiresIn: "7d",
    });
    
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(err);
  }
};

module.exports = generateToken;
