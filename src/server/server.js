var fs = require('fs');
var path = require('path');
var url = require('url');
var express = require('express');


var basePath = path.resolve();
var place = "/dist"; // "/src" console.log(basePath);
var app = express();


//app.use('/scripts', express.static(path.join(basePath, place, '/scripts')));
app.use('/node_modules', express.static(path.join(basePath, '/node_modules')));
app.use('/photo', express.static(path.join(basePath, place, '/app/assets')));
app.use('/app', express.static(path.join(basePath, place, '/app')));


app.get('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, place, '/index.html'));
    readable.pipe(res);
});

var footerRouter = require('./db/footer/footerRouter')
app.use('/footer', footerRouter)

var headerRouter = require('./db/header/headerRouter')
app.use('/header', headerRouter)



app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port ' + (process.env.PORT || 5000));
});