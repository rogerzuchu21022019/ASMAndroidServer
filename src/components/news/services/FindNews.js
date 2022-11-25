// import {News} from "../models/NewsModel";
const News = require("../models/NewsModel");
const FindNewsService = async (id) => {
  try {
    const query = { _id: id };
    const selectFields =
      "_id title description category imageUrl createdAt comments newsID count author";
    const queryCategory = {
      path: "category",
      select: "_id name description",
    };
    const queryAuthor = {
      path: "author",
      select: "_id name email",
    };
   
    const data = await News.findOne(query)
      .select(selectFields)
      .populate(queryCategory)
      .populate(queryAuthor);
    return data;
  } catch (error) {
    console.log(`Error handler CreateCategory: ${error}`);
  }
};

export default FindNewsService;
