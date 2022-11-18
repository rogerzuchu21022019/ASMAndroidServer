const mongoose = require("mongoose");
const mongoosePaginate = require(`mongoose-paginate-v2`);
const { userConnection } = require("../../../utils/server/MultiConnection");
const Schema = mongoose.Schema;
const CommentSchema = new Schema(
  {
    newsID: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    userID: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    name: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
    comments:[
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      }
    ]
    // likes: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     default: 0,
    //     ref: "Like",
    //   },
    // ],
  },
  {
    collection: "Comment Collection",
    timestamps: true,
    typeKey: "type",
  }
);

/* UserSchema.method là bên cung cấp sẵn */
/* UserSchema.virtual  */
/* UserSchema.methods là mình tự custome */

UserSchema.plugin(mongoosePaginate);
UserSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//Export the model
module.exports = userConnection.model("Comment", CommentSchema);
