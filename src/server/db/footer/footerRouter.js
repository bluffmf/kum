var express = require('express');
var fs = require('fs');
var path = require('path');



var basePath = path.resolve();
var router = express.Router({
    mergeParams: true
});

var authorize = function(req, res, next) {
    if(req.session.user) {
        next();
    } else {
        console.log('Not a user');
        res.status(500).send('Not a user');
    }
};



router.all('/', function(req, res, next) {
    // console.log(req.method, 'for', req.params.footer);
    next();
});


router.post('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, '/src/server/db/footer/', '/footer.json'));
    readable.pipe(res);
});


router.put('/', authorize, function(req, res) {
    var fp = path.join(basePath, '/src/server/db/footer/', '/footer.json');
    fs.unlinkSync(fp); // delete the file
    fs.writeFileSync(fp, JSON.stringify(req.body, null, 2), {encoding: 'utf8'});

    var readable = fs.createReadStream(fp);
    readable.pipe(res);
});


module.exports = router;



// {
//     "policy": "Privacy Policy",
//     "copyright":  "© 2017 NgKu",
//     "items": [
//         { "name": "(095)-55-555-55", "icon": "phone", "path_url": "https://vk.com/bluffmf", "icon_url": "photo/svg/phone.svg" },
//         { "name": "Вконтакте", "icon": "vk", "path_url": "https://vk.com/bluffmf", "icon_url": "photo/svg/vk.svg" },
//         { "name": "Google+", "icon": "google_plus", "path_url": "https://plus.google.com/collection/syU9a", "icon_url": "photo/svg/google_plus.svg" }
//     ]
// }