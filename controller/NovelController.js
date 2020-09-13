//Import Novel Model
var Novel = require('@novelreader/core/model/Novel');
//For list
exports.list = function (req, res) {
    Novel.get(req.params.limit)
        .then((err, novels) => {
            if (err)
                res.json({
                    status: "error",
                    message: err
                });
            res.json({
                status: "success",
                message: "Got Novel Successfully!",
                data: novels
            });
        });
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