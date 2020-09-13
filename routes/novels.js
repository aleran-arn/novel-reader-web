var express = require('express');
var router = express.Router();
var novelController = require('../controller/NovelController');

/* GET listing. */
router.route('/novels')
    .get(novelController.list);

router.route('/novel/:novelid')
    .get(novelController.view);

module.exports = router;
