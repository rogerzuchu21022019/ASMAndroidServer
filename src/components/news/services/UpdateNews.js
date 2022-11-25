// import {News} from "../models/NewsModel";
const UploadFile = require("../../../utils/api/UploadFile");
const News = require("../models/NewsModel");
const UpdateServices = async (id, news) => {
  try {
    const query = { _id: id };
    
    const newsUnderDB = await News.findById(id)

    const updateValue = {
      $set: {
        title: news.title,
        description: news.description,
        imageUrl: news.imageUrl ? news.imageUrl : newsUnderDB.imageUrl,
      },
    };
    const optionsUpdate = {
      new: true,
      upsert: true,
    };
    const data = await News.findByIdAndUpdate(
      query,
      updateValue,
      optionsUpdate
    );
    return data;
  } catch (error) {
    console.log(`Error handler UpdateServices: ${error}`);
  }
};
module.exports = UpdateServices;
