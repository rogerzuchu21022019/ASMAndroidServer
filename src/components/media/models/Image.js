const mongoose = require(`mongoose`);
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    images: [
      {
        name: { type: String },
        url: { type: String },
      },
      
    ],
  },
  {
    collection: "Image Collection",
    timestamps: true,
    typeKey: "type",
  }
);
module.exports = userConnection(`Image`, ImageSchema);
