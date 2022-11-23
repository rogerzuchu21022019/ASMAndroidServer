import findNewsService from "../services/FindNews.js";

const FindNewsController = async (id) => {
  try {
    const data = await findNewsService(id);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsController;
