var express = require('express');
var fs = require('fs');
var path = require('path');


var placeAdmin = "/dist/adminku";

var basePath = path.resolve();
var router = express.Router({
    mergeParams: true
});


// var authorize = require('../../server');
var authorize = function(req, res, next) {
    if(req.session.user) {
        next();
    } else {
        console.log('Not a user');
        // res.status(500).send('Not a user');
        res.redirect('/')
    }
};

router.all('/', function(req, res, next) {
    console.log(req.method, 'for Admin: ');

    next();
});



router.get('/', authorize, function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, placeAdmin, '/adminku.html'));
    readable.pipe(res);
})


router.post('/', function(req, res, next) {

    var flag = (req.body.login === 'w' && req.body.password === 'w') ? true : false;

    if (flag) {
        req.session.user = {name: 'admin', home: 'Pyatihatky'}
        console.log('First Good')
        res.send('admin')
    } else {
        delete req.session.user
        console.log('Access Denied!')
        res.status(500).send('Access Denied!');
    }
});



module.exports = router;

