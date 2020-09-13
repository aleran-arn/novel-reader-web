var mongoose = require('mongoose');

var novelSchema = mongoose.Schema({
    novelId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    coverHref: {
        type: String,
        required: true,
    },
    lastChapterNumber: {
        type: String,
        required: true,
    },
    lastChapterLitle: {
        type: String,
        required: true,
    },
    lastChapterUpdate: {
        type: Date,
        required: true,
        index : true,
    }
});

// Export Novel Model
var Novel = module.exports = mongoose.model('novels', novelSchema);
module.exports.get = function (callback, limit) {
    Novel.find(callback).limit(limit); 
};