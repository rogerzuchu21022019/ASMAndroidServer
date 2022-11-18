
module.exports = {
  login : require("./users/auth/Login"),
  register :require("./users/register/Register"),
  logout : require("./users/auth/Logout"),
  update: require(`./users/info/Update`)
};
