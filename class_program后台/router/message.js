const express = require('express');
const message = require('../api/message')
const router = express.Router();
//市政重要消息 
router.get('/cityMessage',message.cityMessage)
//市政重要消息 
router.post('/insertMessage',message.insertMessage)
router.post('/deletetMessage',message.deletetMessage)
// 社区消息
router.get('/communityMsg',message.communityMsg)
router.post('/insertCommunityMsg',message.insertCommunityMsg)
router.post('/deletetCommunityMsg',message.deletetCommunityMsg)
// 反馈消息
router.get('/feedbackMsg',message.feedbackMsg)
router.post('/insertFeedbackMsg',message.insertFeedbackMsg)
router.post('/deletetFeedbackMsg',message.deletetFeedbackMsg)
module.exports = router;