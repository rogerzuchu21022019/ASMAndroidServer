const uploadService = require("../services/Upload");


const UploadController = async (req, res, next) => {
  try {
    const image = await uploadService(req);
    image
      ? res.status(200).json({
          status: "Success",
          message: `Upload image successfully`,
          error: false,
          isUploaded: true,
          data: image,
        })
      : res.status(400).json({
          status: "Fail",
          message: `Upload image fail`,
          error: true,
          isUploaded: false,
          data: null,
        });
  } catch (error) {
    console.log(`Error handler UploadController: ${error}`);
  }
};
module.exports = UploadController;