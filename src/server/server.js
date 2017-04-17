var fs = require('fs');
var path = require('path');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')


var basePath = path.resolve();
var placeMain = "/dist/main";
var placeAdmin = "/dist/adminku";

var app = express();



app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/node_modules', express.static(path.join(basePath, '/node_modules')));
app.use('/photo', express.static(path.join(basePath, placeMain, '/app/assets')));
app.use('/app_main', express.static(path.join(basePath, placeMain, '/app')));
app.use('/app_admin', express.static(path.join(basePath, placeAdmin, '/app')));


app.get('/', function(req, res) {

    // if (!req.session.ad) {
    //     req.session.ad = 1;
    // }
    // req.session.ad++
    // console.log(req.session.ad)
    // var readable = fs.createReadStream(path.join(basePath, placeAdmin, '/adminku.html'));
    var readable = fs.createReadStream(path.join(basePath, placeMain, '/index.html'));
    readable.pipe(res);
});

var footerRouter = require('./db/footer/footerRouter')
app.use('/footer', footerRouter)

var headerRouter = require('./db/header/headerRouter')
app.use('/header', headerRouter)

var containerRouter = require('./db/container/containerRouter')
app.use('/container', containerRouter)

var adminRouter = require('./db/admin/adminRouter')
app.use('/admin', adminRouter)



app.use(function(req, res, next) {
    res.status(404)
    var readable = fs.createReadStream(path.join(basePath, placeMain, '/app/assets/png/404.png'));
    readable.pipe(res);
});


app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port ' + (process.env.PORT || 5000));
});












// http://localhost:5000/header
// var authorize = function(req, res, next) {
//     if(req.session.user) {
//         next();
//     } else {
//         console.log('Not a user');
//         // res.status(500).send('Not a user');
//         res.redirect('/')
//     }
// }
// module.exports = authorize;