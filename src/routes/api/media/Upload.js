const express = require(`express`);
const router = express.Router();
router.post(`/media`,async (req,res,next)=>{
    try {
        
        res.status(200).json({
            status: "Success",
            message: `Upload file successfully`,
            error: false,
            isUploaded: true,
            data: file,
          })
    } catch (error) {
        console.log(`Error handler Upload: ${error}`);
    }
})

module.exports = router;
