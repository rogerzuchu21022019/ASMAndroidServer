const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const options = {
  timestamps: true,
};
const NewsSchema = new Schema(
  {
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
    category: {
      type: ObjectID,
      ref: "Category ",
    },
  },
  options
);

NewsSchema.plugin(mongoosePaginate);

module.exports = userConnection.model("News", NewsSchema);
