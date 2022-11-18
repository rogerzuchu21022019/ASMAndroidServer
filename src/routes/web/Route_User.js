const loginRouter = require(`./users/auth/Login`);
const logoutRouter = require(`./users/auth/Logout`);
const registertRouter = require(`./users/register/Register`);

module.exports = {
    loginRouter,
    logoutRouter,
    registertRouter,
}