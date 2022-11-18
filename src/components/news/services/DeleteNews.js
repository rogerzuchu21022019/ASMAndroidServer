const News = require("../models/News");

const DeleteServices = async (id) => {
  try {
    const data = await News.findByIdAndDelete(id);
    return data;
  } catch (error) {
    console.log(`Error handler DeleteServices: ${error}`);
  }
};
module.exports = DeleteServices;
