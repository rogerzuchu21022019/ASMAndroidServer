const mongoose = require("mongoose");
const { userConnection } = require("../../utils/server/MultiConnection");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
  },
  { collection: "User Collection", timestamps: true }
);

//Export the model
module.exports = userConnection.model("User", userSchema);


