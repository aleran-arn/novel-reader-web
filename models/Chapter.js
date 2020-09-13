var mongoose = require('mongoose');

var chapterSchema = mongoose.Schema({
    novelId: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

// Export Chapter Model
var Chapter = module.exports = mongoose.model('chapters', chapterSchema);
module.exports.get = function (callback, limit) {
    Chapter.find(callback).limit(limit); 
};