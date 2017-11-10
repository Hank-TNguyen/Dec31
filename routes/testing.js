var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(path.resolve("public/javascripts/components/") + "/test.html"));
});

module.exports = router;
