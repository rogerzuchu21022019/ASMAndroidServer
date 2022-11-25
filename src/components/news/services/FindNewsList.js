// import {News} from "../models/NewsModel";
const News = require("../models/NewsModel");

const FindNewsListService = async (page) => {
  try {
    const query = { };

    const optionsPaginate = {
      limit: 10,
      page: page,
    };
    const sortReverseArray = {
      sort: {
        _id: -1,
      },
    };
    const data = await News.paginate(query, optionsPaginate, sortReverseArray);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

export default FindNewsListService;
