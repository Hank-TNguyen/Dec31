var express = require('express');
var router = express.Router();
var linkedin = require('node-linkedin')('77bprhhwzygdid', 'CkeX9rfc2BwEMAH6');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('testing', { title: '© Hank. Test!' });

    console.log(req.sessionID);

});

module.exports = router;
