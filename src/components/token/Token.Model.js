const mongoose = require("mongoose");
const { userConnection } = require("../../utils/server/MultiConnection");

const Schema = mongoose.Schema;
mongoose.Types.ObjectId = Schema.ObjectId;

const TokenSchema = new Schema(
  {
    accessToken: {
      type: Array,
      required: true,
    },
    refreshToken: {
      type: Array,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
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
