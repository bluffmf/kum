var express = require('express')
var fs = require('fs')

var router = express.Router({
    mergeParams: true
})


router.all('/', function(req, res, next) {
    console.log(req.method, 'for', req.params.footer)
    next()
})

router.get('/', function(req, res) {
    res.send( {"hello": "world"} )
})



module.exports = router

