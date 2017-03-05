var express = require('express');
var fs = require('fs');
var path = require('path');



var basePath = path.resolve();
var router = express.Router({
    mergeParams: true
});



router.all('/', function(req, res, next) {
    // console.log(req.method, 'for', req.params.header);
    next();
});


router.get('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, '/src/server/db/header/', '/header.json'));
    readable.pipe(res);
});



module.exports = router;

