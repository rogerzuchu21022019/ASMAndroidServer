const createNewsService = require("../services/CreateNews");

const CreateNewsController = async (news) => {
  try {
    const data = await createNewsService(news);
    return data;
  } catch (error) {
    console.log(`Error handler Createnews: ${error}`);
  }
};
module.exports = CreateNewsController;
