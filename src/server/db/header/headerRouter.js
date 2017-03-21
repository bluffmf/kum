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
    // console.log(req.method, 'for', req.params.header);
    next();
});


router.post('/', function(req, res) {
    var readable = fs.createReadStream(path.join(basePath, '/src/server/db/header/', '/header.json'));
    readable.pipe(res);
});

router.put('/', authorize, function(req, res) {
    var fp = path.join(basePath, '/src/server/db/header/', '/header.json');
    fs.unlinkSync(fp); // delete the file
    fs.writeFileSync(fp, JSON.stringify(req.body, null, 2), {encoding: 'utf8'});

    var readable = fs.createReadStream(fp);
    readable.pipe(res);
});


module.exports = router;





// {
//     "logo": "photo/png/bar.png",
//     "title": "Site in progress",
//     "phone": "(095)-55-555-55",
//     "address": "Украина, г.Пятихатки"
// }


// fs.readFile(filePath, 'utf8', function readFileCallback(err, data) {
//     if (err){
//         console.log(err);
//         res.status(500).send('Can not read file');
//     } else {
//         var obj = JSON.parse(data); //now it an object
//         obj.title = req.body.title;
//         var json = JSON.stringify(obj); //convert it back to json
//         fs.writeFile(filePath, json, 'utf8', (err, data) => {
//             if (err) {
//                 res.status(500).send('Can not write file!');
//             } else {
//                 res.send(data);
//             }
//         });
//     }
// });


// function saveUser(username, data) {
//     var fp = getUserFilePath(username)
//     fs.unlinkSync(fp) // delete the file
//     fs.writeFileSync(fp, JSON.stringify(data, null, 2), {encoding: 'utf8'})
// }
//
// router.put('/', function (req, res) {
//     var username = req.params.username
//     var user = helpers.getUser(username)
//     user.location = req.body
//     helpers.saveUser(username, user)
//     res.end()
// })



