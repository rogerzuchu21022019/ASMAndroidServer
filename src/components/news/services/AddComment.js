import News from "../models/NewsModel";
// const News = require("../models/NewsModel");
const AddCommentService = async (id, comment) => {
  try {
    const query = {
      _id: id,
    };
    const setNewComment = {
      $push:{
        comments: comment
      },
      $inc: { countComment: 1 },
    };


    const selectFields = "commentID content user"
    const optionsUpdate = { new: true, upsert: true };
    const data = await News.findByIdAndUpdate(
      query,
      setNewComment,
      optionsUpdate
    )
    console.log(
      "🚀 ~ file: AddComment.js ~ line 14 ~ AddCommentService ~ data",
      data
    );
    return data;
  } catch (error) {
    console.log(`Error handler AddCommentService: `, error);
  }
};
module.exports =  AddCommentService;