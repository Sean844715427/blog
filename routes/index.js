var express = require('express');
var router = express.Router();
// var model = require('../model/category')
var db = require('../model/db')
var request = require('request');

//文章
router.post('/artcile', (req,res)=>{
    console.log(req.body)
    let sql = `select * from article `
    db.connect(sql,(err,result)=>{
        console.log(JSON.stringify(result))
        res.send(result)
    })
})

//菜单
router.post('/menu', (req,res)=>{
    let sql = `select * from menu`
    db.connect(sql,(err,result)=>{
        console.log(JSON.stringify(result))
        res.send(result)
    })
})

//音乐类别
router.post('/playlist/catlist', (req,res)=>{
    request('https://musicapi.leanapp.cn/playlist/catlist', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body)
    }
    });
})

module.exports = router
