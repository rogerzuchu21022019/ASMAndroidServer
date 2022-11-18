const User_Model = require("../models/User_Model");

const UpdateService = async (id, user) => {
  try {
    const query = { _id: id };
    const updateInfo = {
      $set: {
        name: user.name,
        phone: user.phone,
        address: user.address,
        dob: user.dob,
        imageUrl: user.imageUrl,
      },
    };
    const conditionUpdate = {
      new: true,
      upsert: true,
    };
    const userNew = await User_Model.findByIdAndUpdate(
      query,
      updateInfo,
      conditionUpdate
    );
    console.log("🚀 ~ file: Update.js ~ line 15 ~ UpdateService ~ user", user);

    return userNew;
  } catch (error) {
    console.log(`Error handler UpdateService: ${error}`);
  }
};
module.exports = UpdateService;
