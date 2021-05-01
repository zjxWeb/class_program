const db = require('../DBfile/db.js')
const querystring = require('querystring');
const axios = require("axios");

// 查询outWater信息
exports.outWaterMsg = (req,res)=>{
    let sql = 'select * from outWater';
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
// 根据id查询outWater信息
exports.idoutWaterMsg = (req,res)=>{
    let info = req.body;
    let sql = 'select * from outWater where id=?';
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
// 添加接口
/**
 * 
 * @param {date:String} req 
 * @param {name:String} req
 * @param {local:Number} req
 * @param {isOPen:Number} req 0关，1开
 */
exports.addoutWaterMsg = (req,res)=>{
    let info = req.body;
    let sql = 'insert into outWater set ?';
    if(info){
        db.base(sql,info,(result) => {
            if(result.affectedRows >= 1){
                res.json({flag:1,tite:'添加路灯',msg:"数据插入成功"});
            }else{
                res.json({flag:2,msg:"数据插入失败，请稍后再试"});
            }
        })
    }
    else{
        res.json({msg:"失败"})
    }
}
// 删除 根据id
exports.deleteoutWaterMsg = (req,res)=>{
    let info = req.body;
    let sql = `delete from outWater where id=? `
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows >= 1){
            res.json({flag:1,tite:'根据id删除路灯'});
        }else{
            res.json({flag:2});
        }
    })
}

// 根据id 编辑
exports.editoutWaterMsg= (req,res) => {
    let info = req.body;
    let sql = "update outWater set date=?,name=?,local=?,isOPen=? where id=?";
    let data = [info.date,info.name,info.local,info.isOPen,info.id];
    db.base(sql,data,(result) => {
        if(result.affectedRows >= 1){
            res.json({flag:1,tite:'根据id修改路灯信息'});
        }else{
            res.json({flag:2});
        }
    });

}

// 修改灯的状态
// on/off
exports.isOpenoutWaterMsg= (req,res) => {
    let info = req.body;
    let sql = "update outWater set isOpen=? where id=?";
    let data = [info.isOPen,info.id];
    let params = {
        uid:'745e2d7bee3a553a3693dc150d3711cf',
        topic:'light002',
        type:3,
        msg:info.isOPen
    }
    console.log(params.msg)
    db.base(sql,data,(result) => {
        if(result.affectedRows >= 1){
            axios({
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                url: 'https://api.bemfa.com/api/device/v1/data/1/push/post/',
                data: querystring.stringify(params),
              }).then((msg)=>{
                res.send(msg.data)
                console.log(params)
              })
        }else{
            res.json({flag:2});
        }
    });

}
