var express = require('express');
var router = express.Router();
var chapterController = require('../controller/ChapterController');


router.route('/chapters')
    .get(chapterController.list);

router.route('/chapter')
    .get(chapterController.view);

module.exports = router;
