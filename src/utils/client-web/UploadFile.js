const cloudinary = require("cloudinary").v2;
require(`dotenv`).config();
const formidable = require("formidable");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const UploadFile = async (req) => {
  const file = req.files;
  const result = await cloudinary.uploader.upload(
    file.tempFilePath,{
      folder: "news",
      public_id:`${Date.now()}`,
      resource_type: "auto",
      folder: "news",
    },
  );

  return result;
};
module.exports = UploadFile;
