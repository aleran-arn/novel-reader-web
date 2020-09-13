//Import Novel Model
var Novel = require('@novelreader/core/model/Novel');
//For list
exports.list = async function (req, res) {
    try {
        const novels = await Novel.get(req.params.limit);
        res.json({
            status: "success",
            message: "Got Novel Successfully!",
            data: novels
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};
// View Novel
exports.view = function (req, res) {
    Novel.findById(req.params.novelid, function (err, novel) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: 'Novel Details',
            data: novel
        });
    });
};