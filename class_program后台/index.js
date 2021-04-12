const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/router.js')
const msg = require('./router/message.js')
const passport = require('passport');
const light = require('./router/light.js')
const app = new express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit : "50mb"}));  

//passport的初始化
app.use(passport.initialize());
app.use(passport.session());

//跨域解决
// app.all("/*", function(req, res, next) {
//     // 跨域处理
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next(); // 执行下一个路由
// })
// 设置跨域和相应数据格式
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
//回调passport.js文件中
require('./config/passport')(passport);


// 指定api路径 all book jsonp
app.use(router);
// 消息路由
app.use(msg);
//路灯路由
app.use(light);

//配置404页面
app.use(function(req,res,next){
	res.json({'msg':"页面发生404错误"})
})

//配置全局错误处理中间件

app.use(function(err,req,res,next){
	res.status(500).json({
		err_code:500,
		message:err.message
	})
})
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`serve starded on  ${port}`)
})
