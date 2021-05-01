const express = require('express');
const outWater = require('../api/outWater')
const router = express.Router();

// 列表信息
// 查询outWater信息
router.get('/outWaterMsg',outWater.outWaterMsg)
// 根据id查询outWater信息
router.post('/idoutWaterMsg',outWater.idoutWaterMsg)
// 添加接口
router.post('/addoutWaterMsg',outWater.addoutWaterMsg)
// 删除 根据id
router.post('/deleteoutWaterMsg',outWater.deleteoutWaterMsg)
// 根据id 编辑
router.post('/editoutWaterMsg',outWater.editoutWaterMsg)
// 修改灯的状态
router.post('/isOpenoutWaterMsg',outWater.isOpenoutWaterMsg)
module.exports = router;