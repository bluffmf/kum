var fs = require('fs');
var path = require('path');
var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');


var basePath = path.resolve();
var place = "/dist"; // "/src" console.log(basePath);
var app = express();


//app.use('/scripts', express.static(path.join(basePath, place, '/scripts')));
app.use('/node_modules', express.static(path.join(basePath, '/node_modules')));
app.use('/photo', express.static(path.join(basePath, place, '/app/assets')));
app.use('/app', express.static(path.join(basePath, place, '/app')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, place, '/index.html'));
    readable.pipe(res);
});

var footerRouter = require('./db/footer/footerRouter')
app.use('/footer', footerRouter)

var headerRouter = require('./db/header/headerRouter')
app.use('/header', headerRouter)

var adminRouter = require('./db/admin/adminRouter')
app.use('/admin', adminRouter)



app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port ' + (process.env.PORT || 5000));
});