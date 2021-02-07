const { json } = require('express')
var db = require('../model/db')

let menu = (req, res)=>{
    console.log(body.req)
    var sql = `select * from menu`
    db.connect(sql,(err,result)=>{
    return result
    })
}

let category = (req, res)=>{
    var sql = `select * from article`
    db.connect(sql,(err,result)=>{
    return res.json(result)
    })
}

module.exports = {
    menu
}