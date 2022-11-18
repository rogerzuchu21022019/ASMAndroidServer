const UploadService = async (req) => {
  try {
    const { file } = req;
    const { filename, mimetype, size } = file;
    console.log("🚀 ~ file: Upload.js ~ line 5 ~ UploadService ~ size", size)
    console.log("🚀 ~ file: Upload.js ~ line 5 ~ UploadService ~ mimetype", mimetype)
    console.log("🚀 ~ file: Upload.js ~ line 5 ~ UploadService ~ filename", filename)
    const image = {
      filename,
      mimetype,
      size,
    };
    return image;
  } catch (error) {
    console.log(`Error handler UploadService: ${error}`);
  }
};
module.exports = UploadService;
