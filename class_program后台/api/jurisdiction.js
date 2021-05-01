const db = require('../DBfile/db.js')
const querystring = require('querystring');
const axios = require("axios");

// 查询jurisdiction信息
exports.jurisdictionMsg = (req,res)=>{
    let sql = 'select * from username order by id  ';
    db.base(sql,null,(result)=>{
        if(result){
            res.json({status:'000000',result})
        }
        else{
            req.json({
                status:'000001',
                msg:'当前没有数据为空，请你添加数据'
            })
        }
    })
}
// 根据id查询jurisdiction信息
exports.idjurisdictionMsg = (req,res)=>{
    let info = req.body;
    let sql = 'select * from username where id=?';
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result){
            res.json({status:'000000',result})
        }
        else{
            req.json({
                status:'000001',
                msg:'当前没有数据为空，请你添加数据'
            })
        }
    })
}
//根据Sphone查询jurisdiction信息 editSphoneJurisdiction
exports.editSphoneJurisdiction = (req,res)=>{
    let info = req.body;
    let sql = 'select * from username where Sphone=?';
    let data = [info.Sphone]
    db.base(sql,data,(result)=>{
        if(result){
            res.json({status:'000000',result})
        }
        else{
            req.json({
                status:'000001',
                msg:'当前没有数据为空，请你添加数据'
            })
        }
    })
}
// 删除 根据id
exports.deletejurisdictionMsg = (req,res)=>{
    let info = req.body;
    let sql = `delete from username where id=? `
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows >= 1){
            res.json({flag:1,tite:'根据id删除用户数据'});
        }else{
            res.json({flag:2});
        }
    })
}

// 根据id 编辑
exports.editjurisdictionMsg= (req,res) => {
    let info = req.body;
    let sql = "update username set Sphone=?,Sname=?,jurisdiction=? where id=?";
    let data = [info.Sphone,info.Sname,info.jurisdiction,info.id];
    db.base(sql,data,(result) => {
        if(result.affectedRows >= 1){
            res.json({flag:1,tite:'根据id修改用户信息'});
        }else{
            res.json({flag:2});
        }
    });

}

