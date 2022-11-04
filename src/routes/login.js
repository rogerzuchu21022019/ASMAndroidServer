var express = require('express');
var router = express.Router();
router.get('/auth-login', function(req, res, next) {
  const response = req.body
  
  res.render('login');
});

module.exports = router;
