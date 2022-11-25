const mongoose = require("mongoose");
const mongoosePaginate = require(`mongoose-paginate-v2`);
const bcrypt = require(`bcrypt`);
const { userConnection } = require("../../../utils/server/MultiConnection");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    address: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    dob: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    role: {
      type: String,
      default: "User",
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

UserSchema.pre(`save`, async function (next) {
  try {
    console.log(`pre save `);
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(this.password, salt);
    this.password = hashPass;
    next();
  } catch (error) {
    next(error);
  }
});


UserSchema.plugin(mongoosePaginate);
UserSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//Export the model
module.exports = userConnection.model("User", UserSchema);
