const Category = require("../models/Category");
const createError = require(`http-errors`);

const CreateCategoryService = async (category) => {
  try {
    // const query = { name: category.name };
    // console.log(
    //   "🚀 ~ file: AddCategory.js ~ line 12 ~ CreateCategoryService ~ query",
    //   query
    // );
    // const nameType = category.types.nameType;
    // const count = category.types.count;
    // const optionsInsert = {
    //   upsert: true,
    //   new: true,
    // };
    // const data = await Category.findOneAndUpdate(
    //   query,
    //   {
    //     $set: {
    //       name: category.name,
    //       description: category.description,
    //     },
    //     $push: {
    //       types: {
    //         nameType,
    //       },
    //     },
    //     $inc: { count: 1 },
    //   },
    //   optionsInsert
    // );

    const data = await Category.create(category);
    data ? data : createError(401);
    return data;
  } catch (error) {}
};

module.exports = CreateCategoryService;
