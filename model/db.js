var mysql = require('mysql');

const pool = mysql.createPool({
    host:"cdb-ksqxii98.cd.tencentcdb.com",
    port:10082,
    user:"root",
    password:"wangwenchen123",
    database:"wwc"
  })
  
module.exports={
    connect:(sql,callback)=>{
        pool.getConnection((error,connection)=>{
            if(error) return console.log("数据库连接失败",error);
            connection.query(sql,(err,result)=>{
                connection.release();
                callback(err,result);
            });
        });
    }
  }