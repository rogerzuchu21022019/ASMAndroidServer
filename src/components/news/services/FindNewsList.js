// import {News} from "../models/NewsModel";
const News = require("../models/NewsModel");

const FindNewsListService = async () => {
  try {
    const query = { };

    const optionsPaginate = {
      limit: 10,
      page: 1,
    };
    const sortReverseArray = {
      sort: {
        createdAt: -1,
      },
    };
    const data = await News.paginate(query, optionsPaginate, sortReverseArray);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

export default FindNewsListService;
