var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req);
    res.render('testing', { title: '© Hank. Test!' });
  // res.redirect('/oauth/linkedin');
});

module.exports = router;
