let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');

let novelsRouter = require('./routes/novels');
let chaptersRouter = require('./routes/chapters');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Pass to next layer of middleware
    next();
});
app.use(cookieParser());

app.use('/', novelsRouter);
app.use('/', chaptersRouter);

module.exports = app;
