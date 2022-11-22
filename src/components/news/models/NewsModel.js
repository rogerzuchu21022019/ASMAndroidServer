import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { v4 as uuidv4 } from "uuid";
import { userConnection } from "../../../utils/server/MultiConnection";

const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;


const options = {
  timestamps: true,
  type: "type",
};
const NewsSchema = new Schema(
  {
    newsID: {
      type: String,
      required: true,
      default: uuidv4(),
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    countComment: {
      type: Number,
      default: 0,
    },
    author: {
      type: ObjectID,
      ref: "User",
      required: true,
    },
    comments: [
      {
        commentID: { type: ObjectID, required: true, auto: true },
        content: { type: String, required: true },
        user: { type: ObjectID, ref: "User", required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    category: {
      type: ObjectID,
      ref: "Category",
      required: true,
    },
  },
  options
);
NewsSchema.plugin(mongoosePaginate);

NewsSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


module.exports = userConnection.model("News", NewsSchema);
