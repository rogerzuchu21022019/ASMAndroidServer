const mongoose = require("mongoose");
const mongoosePaginate = require(`mongoose-paginate-v2`);
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;
const LikeSchema = new Schema(
  {
    name: [
      {
        user: {
          name: {tyoe:String,required:true},
          _id: {type:Schema.Types.ObjectId,required:true},
        }
      }
    ]
  },
  {
    collection: "Like Collection",
    timestamps: true,
    typeKey: "type",
  }
);


UserSchema.plugin(mongoosePaginate);
UserSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//Export the model
module.exports = userConnection.model("Like", LikeSchema);
