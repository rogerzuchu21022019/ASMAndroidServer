const findNewsService = require("../services/FindNewsInCategory").default;


const FindNewsController = async (categoryID) => {
  try {
    const data = await findNewsService(categoryID);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsController;
