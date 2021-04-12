const db = require('../DBfile/db.js')

// 市政消息
exports.cityMessage = (req,res) => {
    let sql = 'select * from cityMessage';
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
/**
 * 
 * @param {title:String} req 
 * @param {way:String} req
 * @param {num:Number} req
 */
exports.insertMessage = (req,res)=>{
    let info = req.body;
    let sql = 'insert into cityMessage set ?';
    db.base(sql,info,(result) => {
        // console.log(result);
        if(result.affectedRows >= 1){
            res.json({flag:1,msg:"数据插入成功"});
        }else{
            res.json({flag:2,msg:"数据插入失败，请稍后再试"});
        }
    })
}
exports.deletetMessage = (req,res)=>{
    let info = req.body;
    let sql = `delete from cityMessage where id=? `
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows >= 1){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    })
}
// 社区消息
exports.communityMsg = (req,res)=>{
    let sql = `select * from communityMsg`;
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
/**
 * 
 * @param {title:String} req 
 * @param {way:String} req
 * @param {num:Number} req
 */
 exports.insertCommunityMsg = (req,res)=>{
    let info = req.body;
    let sql = 'insert into communityMsg set ?';
    db.base(sql,info,(result) => {
        // console.log(result);
        if(result.affectedRows >= 1){
            res.json({flag:1,msg:"数据插入成功"});
        }else{
            res.json({flag:2,msg:"数据插入失败，请稍后再试"});
        }
    })
}
exports.deletetCommunityMsg = (req,res)=>{
    let info = req.body;
    let sql = `delete from communityMsg where id=? `
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows >= 1){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    })
}
// 反馈消息
exports.feedbackMsg = (req,res)=>{
    let sql = `select * from feedbackMsg`;
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
/**
 * 
 * @param {title:String} req 
 * @param {way:String} req
 * @param {num:Number} req
 */
 exports.insertFeedbackMsg = (req,res)=>{
    let info = req.body;
    let sql = 'insert into feedbackMsg set ?';
    db.base(sql,info,(result) => {
        // console.log(result);
        if(result.affectedRows >= 1){
            res.json({flag:1,msg:"数据插入成功"});
        }else{
            res.json({flag:2,msg:"数据插入失败，请稍后再试"});
        }
    })
}
exports.deletetFeedbackMsg = (req,res)=>{
    let info = req.body;
    let sql = `delete from feedbackMsg where id=? `
    let data = [info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows >= 1){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    })
}
