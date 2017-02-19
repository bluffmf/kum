var fs = require('fs');
var path = require('path');
var url = require('url');
var express = require('express');


var basePath = path.resolve();
console.log(basePath);
var place = "/dist"; // "/src"

var app = express();


app.use('/node_modules', express.static(path.join(basePath, '/node_modules')));
app.use('/scripts', express.static(path.join(basePath, place, '/scripts')));
app.use('/app', express.static(path.join(basePath, place, '/app')));


app.get('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, place, '/index.html'));
    readable.pipe(res);
});


app.listen(process.env.PORT || 5000, function() {
    console.log('Express server listening on port 3000');
});