const updateUserSerive = require("../services/UpdateUser");

const UpdateUserController = async (
  name,
  phone,
  address,
  imageUrl,
  dob,
  id
) => {
  try {
    const response = await updateUserSerive(
      name,
      phone,
      address,
      imageUrl,
      dob,
      id
    );
    return response;
  } catch (error) {}
};

module.exports = UpdateUserController;
