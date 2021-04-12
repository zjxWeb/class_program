export default {
  api: {
    weather: '/weather', //天气
    Login: '/login',
    Register: '/register',
    //人脸识别
    faceGetToken: '/getToken', //获取Token
    addFace: '/initFace', //添加人脸
    faceFirm: '/checkFace', //识别
    //市政消息
    cityMessage: '/cityMessage', //市政消息
    deletetMessage: '/deletetMessage',
    //社区消息
    communityMsg: '/communityMsg',
    deletetCommunityMsg: '/deletetCommunityMsg',
    //市民反馈消息
    feedbackMsg: '/feedbackMsg',
    deletetFeedbackMsg: '/deletetFeedbackMsg',
    //巴法云http控制灯的开关
    /**
     * 获取你在巴法云创建的主题
     * @author zjx
     * @method get
     * @params uid:745e2d7bee3a553a3693dc150d3711cf
     * @params type:1
     */
    getThem: ' https://api.bemfa.com/api/device/v1/topic/',
    /**
     * 更改灯的状态
     * @author zjx
     * @method POST
     * @params uid:745e2d7bee3a553a3693dc150d3711cf
     * @params light002 //你所要控制的主题
     * @params type:3
     * @params msg:on/off 
     */
    changeLightWay: 'https://api.bemfa.com/api/device/v1/data/1/push/post/',
    // light
    lightMsg: '/lightMsg', // 查询light信息
    idLightMsg: '/idLightMsg', // 根据id查询light信息
    // 添加接口
    /**
     * 
     * @param {date:String} req 
     * @param {name:String} req
     * @param {local:Number} req
     * @param {isOPen:Number} req 0关，1开
     */
    addLightMsg: '/addLightMsg', // 添加
    deleteLightMsg: '/deleteLightMsg',// 删除 根据id
    editLightMsg:'/editLightMsg',// 根据id 编辑
    isOpenLightMsg:'/isOpenLightMsg',// 修改灯的状态
  }
}