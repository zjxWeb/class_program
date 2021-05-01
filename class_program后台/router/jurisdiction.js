const express = require('express');
const jurisdiction = require('../api/jurisdiction')
const router = express.Router();

// 列表信息
// 查询jurisdiction信息
router.get('/jurisdictionMsg',jurisdiction.jurisdictionMsg)
// 根据id查询jurisdiction信息
router.post('/idjurisdictionMsg',jurisdiction.idjurisdictionMsg)
// 删除 根据id
router.post('/deletejurisdictionMsg',jurisdiction.deletejurisdictionMsg)
// 根据id 编辑
router.post('/editjurisdictionMsg',jurisdiction.editjurisdictionMsg)
// 根据Sphone 编辑
router.post('/editSphoneJurisdiction',jurisdiction.editSphoneJurisdiction)
module.exports = router;