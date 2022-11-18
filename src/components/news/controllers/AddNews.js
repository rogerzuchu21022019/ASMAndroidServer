const addNewsService = require("../services/CreateNews");
const createError = require(`http-errors`);

const AddNewsController = async (news) => {
  try {
    const news1 = await addNewsService(news);
    news1 ? news1 : createError(401);
    return news1;
  } catch (error) {}
};

module.exports = AddNewsController;
