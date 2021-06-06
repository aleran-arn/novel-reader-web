//Import Novel Model
var Chapter = require('@novelreader/core/model/Chapter');
//For list
exports.list = async function (req, res) {
    try {
        const chapters = await Chapter.list(req.param('novelId'));
        res.json({
            status: "success",
            data: chapters
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};
// View Novel
exports.view = async function (req, res) {
    try {
        const chapter = await Chapter.get(req.param('novelId'), req.param('chapterId'));
        const nextChapter = await Chapter.findOne({ prevChapterId: chapter.chapterId })
            .select('chapterId')
            .exec();
        res.json({
            status: "success",
            data: {
                novelId: chapter.novelId, chapterId: chapter.chapterId, number: chapter.number,
                title: chapter.title, prevChapterId: chapter.prevChapterId, nextChapterId: nextChapter == null ? null : nextChapter.chapterId,
                content: chapter.content
            }
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};