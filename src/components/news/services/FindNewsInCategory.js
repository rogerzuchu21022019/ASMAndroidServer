const News = require("../models/News");


const FindNewsService = async (categoryID) => {
  try {
    const query = { category: categoryID };

    const optionsPaginate = {
      litmit: 10,
      page: 1,
    };
    const data = await News.paginate(query, optionsPaginate);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsService;
