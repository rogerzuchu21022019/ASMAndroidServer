import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { userConnection } from "~/utils/server/MultiConnection";
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const options = {
  timestamps: true,
};
const NewsSchema = new Schema(
  {
    newsID: {
      type: ObjectID,
      required: true,
      auto: true,
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
    count: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        commentID: { type: ObjectID, required: true, auto: true },
        content: { type: String, required: true },
        user: { type: ObjectID, ref: "User" },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    category: {
      type: ObjectID,
      ref: "Category ",
    },
  },
  options
);

NewsSchema.plugin(mongoosePaginate);

export default userConnection.model("News", NewsSchema);
