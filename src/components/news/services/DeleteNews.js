const News = require("../models/News");

const DeleteNewsService = async (id) => {
  try {
    const query = { _id: id };
    const optionsDelete = {
      upsert: true,
      new: true,
    };
    return await News.findByIdAndDelete(query, optionsDelete);
  } catch (error) {
    console.log(`error handler DELETE NEWS: ${error}`);
  }
};
module.exports = DeleteNewsService;
