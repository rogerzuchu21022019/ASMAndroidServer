const mongoose = require(`mongoose`);
const mongoosePaginate = require(`mongoose-paginate-v2`);

const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
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
  },
  { collection: "Category Collection", timestamps: true, typeKey: "type" }
);

CategorySchema.plugin(mongoosePaginate);

module.exports = userConnection.model(`Category`, CategorySchema);
