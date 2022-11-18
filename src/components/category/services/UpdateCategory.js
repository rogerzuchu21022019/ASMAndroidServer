const Category = require("../models/Category");

const UpdateServices = async (id, category) => {
  try {
    const query = { _id: id };
    const updateValue = {
      $set: category,
    };
    const optionsUpdate = {
      new: true,
      upsert: true,
    };
    const data = await Category.findByIdAndUpdate(
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
