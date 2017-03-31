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
    var readable = fs.createReadStream(path.join(basePath, '/src/server/db/container/', '/container.json'));
    readable.pipe(res);
});


router.put('/', authorize, function(req, res) {
    var fp = path.join(basePath, '/src/server/db/container/', '/container.json');
    fs.unlinkSync(fp); // delete the file
    fs.writeFileSync(fp, JSON.stringify(req.body, null, 2), {encoding: 'utf8'});

    var readable = fs.createReadStream(fp);
    readable.pipe(res);
});


module.exports = router;



// {
//     "company": {
//         "title": "Интернет в частном секторе Пятихаток",
//             "description": "Компания «ООО» также подключает высокоскоростной интернет в частном секторе Пятихаток. Мы используем 10 гигабитные оптоволоконные магистрали и гарантируем каждому клиенту скорость до 100 Мбит/с. Зона покрытия охватывает более 7 тысяч частных домов. Мы предлагаем низкую стоимость подключения услуги и гибкие тарифные планы. Поддержка клиентов осуществляется круглосуточно."
//     },
//     "actions": [
//         {
//             "name": "bonus",
//             "title": "Компания «OOO» проводит акцию «Бонус за подключение».",
//             "description": "По условиям акции новые абоненты, подключившиеся к сети компании в частном секторе, получают 300 грн. на бонусный счет. Средства на бонусном счёте могут быть использованы для оплаты основных и дополнительных услуг компании*:"
//         },
//         {
//             "name": "first",
//             "title": "Первый месяц - бесплатно!",
//             "description": "Тем, кто успел подключится во время действия акции Первый месяц безлимитный интернет в подарок!"
//         }
//     ]
// }