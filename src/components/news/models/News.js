const mongoose = require("mongoose");
const mongoosePaginate = require(`mongoose-paginate-v2`);
const { userConnection } = require("../../../utils/server/MultiConnection");
const Category = require("../../category/models/Category");
const Schema = mongoose.Schema;
const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      default: "",
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      default: "",
    },
    count: {
      type: Number,
      default: 0,
      required: true,
    },
    categories: {
      // type: [Category.schema],
      type: Schema.Types.ObjectId,
      ref: "Category Collection",
    },
    comments: [
      {
        newsID: { type: String, required: true },
        userID: { type: Schema.Types.ObjectId },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    collection: "News Collection",
    timestamps: true,
    typeKey: "type",
  }
);

NewsSchema.plugin(mongoosePaginate);

NewsSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//Export the model
module.exports = userConnection.model("News", NewsSchema);
