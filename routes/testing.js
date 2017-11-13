var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/timeline', function(req, res, next) {
    res.sendFile(path.join(__dirname + "/static/timeline.html"));
});

router.get('/background', function(req, res) {
    res.sendFile(path.resolve("public/images/background.jpg"));
});

module.exports = router;
