const mysql  = require('mysql');

exports.base = (sql,data,callback) => {
    const connection = mysql.createConnection({
        host:'47.95.1.82',
        user:'root',
        password:'0716',
        database:'book'
    });
    connection.connect();

    connection.query(sql,data,function(error,results,fields){
        if(error) throw error;
         callback(results,error);
    })
    connection.end();
}
