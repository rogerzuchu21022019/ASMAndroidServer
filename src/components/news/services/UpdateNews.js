const News = require("../models/News");

const UpdateServices = async (id, news) => {
  try {
    const query = { _id: id };
    const updateValue = {
      $set: news,
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
