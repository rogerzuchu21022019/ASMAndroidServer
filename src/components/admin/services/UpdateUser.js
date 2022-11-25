const User = require("../../users/models/User");

const UpdateUserSerive = async (user, id) => {
  const query = {
    _id: id,
  };
  const userUnderDB = await User.findById(id)
  const updateOption = {
    $set: {
      name: user.name,
      phone: user.phone,
      address: user.address,
      imageUrl: user.imageUrl ? user.imageUrl : userUnderDB.imageUrl,
      dob: user.dob,
    },
  };
  const conditionUpdate = {
    upsert: true,
    new: true,
  };
  
  const response = await User.findByIdAndUpdate(
    query,
    updateOption,
    conditionUpdate
  ).select("-password");
  return response;
};
module.exports = UpdateUserSerive;
