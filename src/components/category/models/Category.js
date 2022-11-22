const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;
const options = {
  timestamps: true,
};
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    // emebeded newsList from News model
  },
  options
);

CategorySchema.plugin(mongoosePaginate);

module.exports = userConnection.model("Category", CategorySchema);
