// import {News} from "../models/NewsModel";
const News = require("../models/NewsModel");
const DeleteServices = async (id) => {
  try {
    const data = await News.findByIdAndDelete(id);
    return data;
  } catch (error) {
    console.log(`Error handler DeleteServices: ${error}`);
  }
};
export default DeleteServices;
