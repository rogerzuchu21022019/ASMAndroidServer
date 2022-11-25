const path = require("path");
const UploadFile = async (req, imageUrl) => {
  const file = req.files.imageUrl;
  const fileName = `${Date.now()}_${Math.round(Math.random() * 1e9)}_${
    file.name
  }`;
  const filePath = path.join(__dirname, `../../public/images/${fileName}`);
  const upload = file.mv(filePath);
  imageUrl = file ? fileName : "";
  imageUrl = imageUrl ? `http://localhost:3000/images/${imageUrl}` : " ";
  const image = imageUrl ? imageUrl : "";
  console.log("🚀 ~ file: UploadFile.js ~ line 14 ~ UploadFile ~ image", image);
  return image;
};

module.exports = UploadFile;

/* Web upload thì form cần enctype = multipart/formdata 
    req.files.imageUrl là đường dẫn tới file
    trong đó imageUrl là name của thẻ input dùng để upload file
    dòng 9 là để check xem file có tồn tạo hay ko nếu tồn tại thì xuất ra tên file(fileName)
    dòng 10 là để check xem file có tồn tạo hay ko nếu tồn tại thì xuất ra đường dẫn kèm link host 
*/
