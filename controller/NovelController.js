//Import Novel Model
var Novel = require('@novelreader/core/model/Novel');
//For list
exports.list = async function (req, res) {
    try {
        const limit = req.param('limit') == null ? 10 : parseInt(req.param('limit'));
        const lastChapterUpdate = req.param('lastChapterUpdate') == null ? Date.now() : parseInt(req.param('lastChapterUpdate'));
        const novels = await Novel.list(lastChapterUpdate, limit);
        res.json({
            status: "success",
            data: novels
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};
// View Novel
exports.view = async function (req, res) {
    try {
        const novel = await Novel.getById(req.param('novelId'));
        res.json({
            status: "success",
            data: novel
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};