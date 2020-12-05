//Import Model
var Novel = require('../model/Novel');
var User = require('../model/User');
//For list
exports.usernovels = async function (req, res) {
    try {
        const userId = req.param('userId');
        if (userId == null) {
            throw new Error('userId should be not null');
        }
        const user = await User.getById(userId);

        res.json({
            status: "success",
            data: user == null ? [] : user.readedNovels
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};

exports.create = async function (req, res) {
    try {
        const userId = req.param('userId');
        if (userId == null) {
            throw new Error('userId should be not null');
        }
        let user = await User.getById(userId);
        if (user == null) {
            user = new User();
            user.userId = userId;
            await user.save();
        }

        res.json({
            status: "success",
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};

exports.addReaded = async function (req, res) {
    try {
        const userId = req.param('userId');
        const novelId = req.param('novelId');
        const chapterId = req.param('chapterId');
        if (userId == null) {
            throw new Error('userId should be not null');
        }
        //TODO where is data security?)

        let user = await User.getById(userId);
        
        for (const userNovel of user.readedNovels) {
            if (userNovel.novelId != novelId || userNovel.novelId == novelId && userNovel.lastChapterId == lastChapterId) {
                continue;
            }
            userNovel.lastChapterId = chapterId;
            userNovel.lastUpdate = Date.now();
        }
        await user.save();

        res.json({
            status: "success"
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};