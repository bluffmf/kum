var fs = require('fs');
var path = require('path');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')


var basePath = path.resolve();
var place = "/dist"; // "/src" console.log(basePath);
module.exports = place;

var app = express();



app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//app.use('/scripts', express.static(path.join(basePath, place, '/scripts')));
app.use('/node_modules', express.static(path.join(basePath, '/node_modules')));
app.use('/photo', express.static(path.join(basePath, place, '/app/assets')));
app.use('/app', express.static(path.join(basePath, place, '/app')));



app.get('/', function(req, res) {

    // if (!req.session.ad) {
    //     req.session.ad = 1;
    // }
    // req.session.ad++
    // console.log(req.session.ad)
    var readable = fs.createReadStream(path.join(basePath, place, '/index.html'));
    readable.pipe(res);
});

var footerRouter = require('./db/footer/footerRouter')
app.use('/footer', footerRouter)

var headerRouter = require('./db/header/headerRouter')
app.use('/header', headerRouter)

var adminRouter = require('./db/admin/adminRouter')
app.use('/admin', adminRouter)



app.use(function(req, res, next) {
    res.status(404)
    var readable = fs.createReadStream(path.join(basePath, place, '/app/assets/png/404.png'));
    readable.pipe(res);
});


app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port ' + (process.env.PORT || 5000));
});