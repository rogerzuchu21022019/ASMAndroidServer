const User = require("../../users/models/User");

const UpdateUserSerive = async (name, phone, address, imageUrl, dob, id) => {
  const query = id;
  const updateOption = {
    name: name,
    phone: phone,
    address: address,
    imageUrl: imageUrl,
    dob: dob,
  };
  const conditionUpdate = {
    upsert: true,
    new: true,
  };
  const response = await User.findByIdAndUpdate(
    query,
    updateOption,
    conditionUpdate
  );

  return response;
};
module.exports = UpdateUserSerive;
