const app = require(`../src/app`);
require(`dotenv`).config();
require(`../src/middlewares/RedisConnection`);

const PORT = process.env.PORT || 3001;
HTTP_PROXY=`http://proxy.server.com:${PORT}`
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
