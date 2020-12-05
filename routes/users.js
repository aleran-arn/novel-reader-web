var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');

router.route('/user/novels')
    .get(userController.usernovels);

router.route('/user/create')
    .post(userController.create);

router.route('/user/addReaded')
    .post(userController.addReaded);

module.exports = router;
