const mongoose = require("mongoose");
const { userConnection } = require("../../../utils/server/MultiConnection");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const TokenSchema = new Schema(
  {
    userId: { type: ObjectId, required: true },
    refreshToken: { type: Array },
    createdAt: { type: Date, default: Date.now, expires: 30 * 86400 },
  },
  {
    timestamps: true,
    typeKey: "type",
  }
);

TokenSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = userConnection.model("Token", TokenSchema);

