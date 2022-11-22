var express = require('express');
var router = express.Router();

router.get('/auth-logout', function(req, res, next) {
  req.cookies['user'] = null;
});

module.exports = router;

