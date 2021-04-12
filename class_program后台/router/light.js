const express = require('express');
const light = require('../api/light')
const router = express.Router();

// 列表信息
// 查询light信息
router.get('/lightMsg',light.lightMsg)
// 根据id查询light信息
router.post('/idLightMsg',light.idLightMsg)
// 添加接口
router.post('/addLightMsg',light.addLightMsg)
// 删除 根据id
router.post('/deleteLightMsg',light.deleteLightMsg)
// 根据id 编辑
router.post('/editLightMsg',light.editLightMsg)
// 修改灯的状态
router.post('/isOpenLightMsg',light.isOpenLightMsg)
module.exports = router;