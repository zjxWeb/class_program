const db = require('../DBfile/db.js')
const request = require('request');
const querystring = require('querystring');
const https = require('https');
const passport = require("passport");
const bcrypt = require('bcryptjs');
const axios = require("axios");
const tools = require('../config/tools');
const  jwt = require('jsonwebtoken');
const fs = require('fs');
const multer  = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
//短信验证
let code = ('000000' + Math.floor(Math.random()*999999)).slice(-6);
exports.infomSent = (req,res) => {
    const queryData = querystring.stringify({
        "mobile":req.body.phone,  // 接受短信的用户手机号码
        "tpl_id": 19928,  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": `#code#=${code}`,  // 您设置的模板变量，根据实际情况修改
        "key":' 1899c0809ae404d49522c786d32e3252',  // 应用APPKEY(应用详细页查询)
    });
    const queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;                                                                                                         

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            
            const jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            jsonObj.code = code;
            res.json(jsonObj)
            // res.json(code)
          
        } else {
            console.log('请求异常');
        }
    }) 
   
}

//注册
exports.register = (req,res) => {
    let respone = {
        'Sphone':req.body.Sphone,
        'Sname':req.body.Sname,
        'Spassword':tools.enbcrypt(req.body.Spassword),
        'tpassword':tools.enbcrypt(req.body.tpassword),
        // "code":req.body.code
    }
    if(req.body.Spassword == req.body.tpassword){
        let sql = 'select * from username where Sname=?';
        let data = [respone.Sname]
        db.base(sql,data,(result)=>{
          if(result.length >=1){
              res.json({flag:1,msg:'用户已存在'});
          }else{
              let sql = 'insert into username set ?';
              db.base(sql,respone,(result)=>{
                if(result.affectedRows >= 1){
                    res.json({flag:1,msg:"注册成功"});
                }else{
                    res.json({flag:2,msg:"注册失败"});
                }
              })
          }
        })
    }else{
        res.json({flag:2,msg:'两次密码不一致'})
    }
  
}

//登录
exports.login = (req,res)=>{
    let respone = {
        "Sphone":req.body.Sphone,
        "Spassword":req.body.Spassword,
    }
    console.log(tools.enbcrypt('0vlMpXN2QeoIIH0EnneAEvLu').toLocaleUpperCase())
    // console.log(tools.enbcrypt(e274cd25440040abbc6f4396b3ac9d21))
    let sql = `select * from username where Sphone=${respone.Sphone}`;
    db.base(sql,null,(result)=>{
        //查到后验证
        if( result.length != 0 ){
            if(  bcrypt.compareSync(respone.Spassword, result[0].Spassword)){
                const payload = { Sphone:result[0].Sphone, Sname:result[0].Sname};
                const token = jwt.sign( payload,'secret',{expiresIn:3600});
                res.json({flag:1,msg:'登录成功',token:"Bearer " + token});
            }else{
                res.json({flag:2,msg:'密码错误'});
            }
        }else{
            res.json({flag:2,msg:'请你注册'});
        }
       
    })
}
//头像
exports.avatar = (req,res)=>{
    // const avatar =req.file.originalname
    // console.log(req.file.path)
    // console.log(avatar)
    // console.log(req.file)
    req.body.upload.unshift(req.file.path)
    const info = req.body.upload;
    // console.log(info)
    let sql = `insert into users set ? `
    const data = {
        "avatar":info[0],
        "Susername":info[1],
        "Ssex":info[2],
        "Sage":info[3],
        "Smajor":info[4],
        "Sschool":info[5],
        "Sqq":info[6],
        "Saddress":info[7],
        "Smotto":info[8],
    }
    // console.log(data)
    db.base(sql,data,(result) => {
        if(result.affectedRows >= 1){
            let sql = `select * from users`
            db.base(sql,null,(result)=>{
                // console.log(result[0].avatar)
                if (result[0].avatar) {
                    // return res.json({
                    //     msg:"你的头像已存在"
                    // })
                }else{
                    return res.status(200).send('上传成功');
                }
                })
            
           res.send({
               flag:1,
               data:data
           })
        }else{
            return res.send({flag:2});
        }
    })
    }

//忘记密码,修改密码
exports.forgit = (req,res)=>{
    let respone = {
        "Sphone":req.body.Sphone,
        "Spassword":req.body.Spassword,
        "tpassword":req.body.tpassword ,
        // "code":req.body.code
    }
    if(respone.Spassword == respone.tpassword){
    let sql = `select * from username where Sphone=${respone.Sphone}`;
    db.base(sql,null,(result)=>{
        if(result.length>=1){
            let sql = 'update username  set Spassword=?,tpassword=? where Sphone=?;';
            let data = [respone.Spassword,respone.tpassword,respone.Sphone]
            db.base(sql,data,(result)=>{
                if(result.affectedRows >= 1){
                    res.json({flag:1,msg:'修改成功'});
                }else{
                    res.json({flag:2,msg:'修改失败'});
                }
            })
        }else{
            res.json({flag:2});
        }
    })
    }else{
        res.json({flag:2,msg:'两次密码不一致'})
    }
}

//用接口地址，返回用户信息

exports.current = (req,res) =>{
    res.json({
        Sphone: req.user[0].Sphone,
        Sname: req.user[0].Sname
    })
}

// getToken
exports.getToken = (req,res) => {
    const param = querystring.stringify({
        'grant_type': 'client_credentials',
        'client_id': '0vlMpXN2QeoIIH0EnneAEvLu',
        'client_secret': 'COgljUAQ2KGbIEWkcc7Zoj7lbVkkIjUR'
        });
        axios.post('https://aip.baidubce.com/oauth/2.0/token', param).then((msg) => {
        // 获取access_token
        res.send(msg.data)
        })
} 
// 注册人脸库
exports.initFace = function(req,res){
    // 请求接口
    var url = 'https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token=' + req.body.access_token
    // 请求的图片数据
    
    // 请求数据
    var data = {
      image_type: 'BASE64',
      image: req.body.img,
      group_id: 'class_program', // 之前注册人脸管理库的名字
      user_id: 'csing' ,      // 这张图片的id
    }
   
    axios({
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: url,
      data: querystring.stringify(data),
    }).then((msg)=>{
      res.send(msg.data)
    })
  
  }
//   检测人脸
exports.checkFace = function(req,res){
    console.log(897979)
    //请求接口
    var url = 'https://aip.baidubce.com/rest/2.0/face/v3/search?access_token=' + req.body.access_token
    // 请求的图片数据
    // 请求数据
    console.log(req.body.access_token)
    var data = {
      image_type: 'BASE64',
      image: req.body.img,
      group_id_list: 'class_program', // 之前注册人脸管理库的名字
      liveness_control: 'HIGH'     // 活体监测
    }
   
    axios({
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: url,
      data: querystring.stringify(data),
    }).then((msg)=>{
      res.send(msg.data)
    })
  
  }

//  weather
/**
 * @param city //你所要查询的天气的城市
 * */ 
exports.weather = function(req,res){
//   console.log(req.body.city)
    // 请求接口
    // 注意汉字编码
    var str =encodeURI(req.body.city);
    let url = 'http://wthrcdn.etouch.cn/weather_mini?spm=a2c4e.10696291.0.0.5cde19a4RGUKjU&city='+str
    // 请求的图片数据
    axios.get(url).then((data)=>{
        res.send(data.data)
    })
  
  }