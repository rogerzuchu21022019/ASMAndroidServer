const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(`ababababab`);
      cb(null,'./public/images/');
  },
  filename: function (req, file, cb) {
    console.log(`fadsfsadfadaf`);

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

module.exports = multer({ storage: storage });
 