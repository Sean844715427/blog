var express = require('express');
var router = express.Router();
// var model = require('../model/category')
var db = require('../model/db')

//获得文章
router.post('/artcile', (req,res)=>{
    console.log(req.body)
    let sql = `select * from article `
    db.connect(sql,(err,result)=>{
        console.log(JSON.stringify(result))
        res.send(result)
    })
})

//获取菜单
router.post('/menu', (req,res)=>{
    let sql = `select * from menu`
    db.connect(sql,(err,result)=>{
        console.log(JSON.stringify(result))
        res.send(result)
    })
})

module.exports = router
