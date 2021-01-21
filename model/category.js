var db = require('../model/db')

let menu = (req, res)=>{
    var sql = `select * from menu`
    db.connect(sql,(err,result)=>{
    return res.json(result)
    })
}

module.exports = {
    menu
}