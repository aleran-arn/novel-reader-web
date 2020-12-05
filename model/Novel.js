const mongoose = require('mongoose');

const novelSchema = mongoose.Schema({
    novelId: {
        type: String,
        index: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    coverHref: {
        type: String,
        required: true,
    },
    lastChapterId: {
        type: String,
        required: true,
    },
    lastChapterTitle: {
        type: String,
        required: true,
    },
    lastChapterUpdate: {
        type: Date,
        required: true,
        index: true,
    }
},
    {
        bufferCommands: false,
    });

// Export Novel Model
const Novel = module.exports = mongoose.model('novels', novelSchema);
module.exports.list = function (lastUpdate, limit) {
    return Novel.find({ lastChapterUpdate: { $lt: lastUpdate } })
        .sort({ lastChapterUpdate: 'desc' })
        .limit(limit)
        .exec();
};

module.exports.getById = function (novelId) {
    return Novel.findOne({ novelId: novelId }).exec();
};