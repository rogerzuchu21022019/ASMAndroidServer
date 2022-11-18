const News = require("../models/News");


const FindNewsListService = async () => {
  try {
    const query = { };

    const optionsPaginate = {
      litmit: 10,
      page: 1,
    };
    // const sortReverseArray = {
    //   sort: {
    //     createdAt: -1,
    //   },
    // };
    const data = await News.paginate(query, optionsPaginate, );
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

module.exports = FindNewsListService;
