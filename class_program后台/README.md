# API接口文档说明（除特殊说明，其他返回值的形式默认为JSON）

1. 短信验证：https://www.juhe.cn聚合数据

   + url:`url+/duanxi_send`

   + 请求方式：post

   + 传值：
   
     ```
      "mobile":req.body.phone,  // 接受短信的用户手机号码
             "tpl_id": 19928,  // 您申请的短信模板ID，根据实际情况修改
             "tpl_value": `#code#=${code}`,  // 您设置的模板变量，根据实际情况修改
          "key":' 1899c0809ae404d49522c786d32e3252',  // 应用APPKEY(应用详细页查询)
     ```

     

   + 返回值：
   
     ```{
      "reason": "错误的短信模板ID,请通过后台确认!!!",
     
       "result": null,
     
       "error_code": 205402,
     
       "code": "222184"
     
     }
     ```

2. 查询所有的图书

   + url:`url+/books`
   + 请求方式：get
   + 返回值：图书的信息
     + 格式：数组

3. 根据id查询图书

   + url:`url+/books/book/:id`
   + 请求方式：get
   + 返回值：id对应的图书信息
     + 格式：数组

4. 添加图书：

   + url：`url+/books/book`

   + 请求方式：post

   + 传值：

     ```
     id：？；
     
     name：？； 
     
     author：？； 
     
     category：？；
     
     description：？；
     ```

   + 返回值：

     + 成功：flag:1
     + 失败：flag:2

5. 编辑方式

   + url：`url+/books/book`

   + 请求方式：put

   + 传值：

     ```
     id：？；
     
     name：？； 
     
     author：？； 
     
     category：？；
     
     description：？；
     ```

   + 返回值：

     + 成功：flag:1
     + 失败：flag:2

6. 删除方式

   + url：`url+/books/book`/:id:
   + 请求方式：delete
   + 返回值：
     + 成功：flag:1
     + 失败：flag:2
   
7. 注册

   + url：`url+register`

   + 请求方式：POST

   + 传值：

     ```
     Sphone（电话）：？；
     Sname（用户名）：？；
     Spassword（密码）：？；
     tpassword（重复密码）：？；
     code（短信验证码）：？；必须是已经申请了短信API服务，默认关闭
     ```
	  
   + 返回值：
     
     ```
     查询你已经注册：flag:1,msg:'用户已存在';
     你输入的两次密码不一致：flag:2,msg:'两次密码不一致'；
     注册成功返回:flag:1,msg:"注册成功";
     注册失败返回：flag:2,msg:"注册失败"
     ```
   
8. 登录

   + url:`url+login`

   + 请求方式：POST；

   + 传值：

     ```
     Sphone:?;
     Spassword:?;
     ```

   + 返回值

     ```
     成功：flag:1,msg:'登录成功'+Token（密码是密文）
     失败：flag:2,msg:'请你注册'
     ```

9. 忘记密码,修改密码

   + url：`url+forgit`

   + 请求方式：POST；

   + 传值

     ```
     "Sphone":?:
     "Spassword"?;
     "tpassword":?;
     "code":?;(和上文一致，默认关闭)
     ```

   + 返回值

     ```
     密码的一致性：flag:2,msg:'两次密码不一致'
     成功返回：flag:1,msg:'修改成功'
     失败返回：flag:2,msg:'修改失败'
     ```
   
10.  用户信息接口（私密）

    + url：`url:current`
    + 请求方式：GET；
    + 请求头： Authorization ：Token；
    + 返回值：用户信息
11. weather天气查询
    + url：`/weather`
    + 请求方式：GET
    + 第三方天气api：`http://wthrcdn.etouch.cn/weather_mini?spm=a2c4e.10696291.0.0.5cde19a4RGUKjU&city=兰州`
    + 参数：city 你所要查询的天气地址
    + 返回：查询到的所有天气情况（近一周）
      + ```
          "status": 1000,
          "desc": "OK"
          ```