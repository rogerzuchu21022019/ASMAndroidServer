var express = require('express');
var router = express.Router();
const navigation = require(`../utils/Navigation`)

router.get('/auth/logout', function(req, res, next) {
  res.render('login')
});

module.exports = router;
