// import {News} from "../models/NewsModel";
const News = require("../models/NewsModel");

const FindNewsService = async (categoryID) => {
  try {
    const query = { category: categoryID };

    const optionsPaginate = {
      limit: 10,
      page: 1,
    };
    const data = await News.paginate(query, optionsPaginate);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

export default FindNewsService;
