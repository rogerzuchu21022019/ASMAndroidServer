const News = require("../../news/models/NewsModel").default;
const Category = require("../models/Category");

const DeleteService = async (id) => {
  try {
    const query = {
      category: id,
    };
    const deleteNews = await News.deleteMany(query, {
      $pull: query,
    });
    const data = await Category.findByIdAndDelete(id);
    return data;
  } catch (error) {
    console.log(`Error handler DeleteService: ${error}`);
  }
};
module.exports = DeleteService;
