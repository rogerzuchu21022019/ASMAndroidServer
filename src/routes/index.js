var express = require('express');
var router = express.Router();
const navigation = require(`../utils/Navigation`)
/* GET home page. */
router.get('/', function(req, res, next) {
  
  console.log("🚀 ~ file: index.js ~ line 7 ~ router.get ~ navigation", navigation.LOGIN)
  res.render('index',{navigation:navigation.LOGIN});
});


module.exports = router;
