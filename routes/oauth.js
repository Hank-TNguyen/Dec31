var express = require('express');
var router = express.Router();
var callbackURL = 'https://dec31.azurewebsites.net/testing';
var Linkedin = require('node-linkedin')('77bprhhwzygdid', 'CkeX9rfc2BwEMAH6', callbackURL);
var scope = ['r_basicprofile'];

/* GET home page. */
router.get('/linkedin', function(req, res, next) {
  Linkedin.auth.authorize(res, scope, 'hanknguyen');
});

module.exports = router;
