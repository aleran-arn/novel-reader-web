var express = require('express');
var router = express.Router();
var novelController = require('../controller/NovelController');

router.route('/novels')
    .get(novelController.list);

router.route('/novel')
    .get(novelController.view);

module.exports = router;
