const express = require(`express`);
const router = express.Router();

router.post(`/odd-number`, (req, res, next) => {
  try {
    const { minNumber, maxNumber } = req.body;
    console.log(
      "🚀 ~ file: OddNumber.js ~ line 7 ~ router.post ~ maxNumber",
      maxNumber
    );
    let total = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
      i % 2 !== 0 ? (total += Number(i)) : null;
    }
    total != 0 ?  res.status(200).json({
      status: "Success",
      message: `Sum of odd number equal ${total}`,
      error: false,
      data: total,
    }) : 
     res.status(400).json({
      status: "Fail",
      message: `Wrong input`,
      error: true,
      data: null,
    });
  } catch (error) {
    
  }
});
module.exports = router;
