const express = require(`express`);
const updateNewsController = require(`../../../components/news/controllers/UpdateNews`);
const uploadFile = require("../../../utils/api/UploadFile");
const router = express.Router();

router.put(`/:id/update`, async (req, res, next) => {
  try {
    const { id } = req.params;
    let { title, description, imageUrl } = req.body;
    
    // imageUrl = await uploadFile(req, imageUrl);

    const news = {
      title,
      description,
      imageUrl,
    };

    const data = await updateNewsController(id, news);
    data
      ? res.json({
          status: `Success`,
          message: `Update news successfully`,
          error: false,
          isUpdated: true,
          data: data,
        })
      : res.json({
          status: `Failed`,
          message: `Update news failed`,
          error: true,
          isUpdated: false,
          data: null,
        });
  } catch (error) {
    res.json({
      status: `Failed`,
      message: `Update news failed`,
      error: true,
      isUpdated: false,
      data: null,
    });
  }
});
module.exports = router;
