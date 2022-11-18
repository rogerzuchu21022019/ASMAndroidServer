const mongoose = require(`mongoose`);
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;

const TypeSchema = new Schema(
  {
    nameType: { type: String, required: true, unique },
  },
  { collection: "Type Collection", timestamps: true, typeKey: "type" }
);

module.exports = userConnection(`Type`, TypeSchema);
