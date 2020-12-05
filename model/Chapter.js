const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
    novelId: {
        type: String,
        required: true,
        index: true,
    },
    chapterId: {
        type: String,
        required: true,
        index: true,
    },
    number: {
        type: Number,
        required: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
    },
    prevChapterId: {
        type: String,
        index: true,
    },
    prevChapterHref: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
});

// Export Chapter Model
const Chapter = module.exports = mongoose.model('chapters', chapterSchema);

module.exports.list = async function (novelId) {
    return Chapter.find({ novelId: novelId }).exec();
};

module.exports.get = async function (novelId, chapterId) {
    return Chapter.findOne({ novelId: novelId, chapterId: chapterId }).exec();
};

module.exports.getNovelChapterIds = async function (novelId) {
    const chapters = await Chapter.find({ novelId: novelId })
        .select('chapterId')
        .exec();
    var chapterNumberSet = new Set();
    for (const chapter of chapters) {
        chapterNumberSet.add(chapter.chapterId);
    }
    return chapterNumberSet;
};