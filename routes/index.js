var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/profile', function(req, res, next) {
  res.render('Profile');
});
router.get('/about', function(req, res, next) {
  res.render('About');
});
router.get('/Login', function(req, res, next) {
  res.render('Login');
});
router.get('/Signup', function(req, res, next) {
  res.render('Signup');
});
router.get('/Logout', function(req, res, next) {
  res.render('Logout');
});

module.exports = router;
