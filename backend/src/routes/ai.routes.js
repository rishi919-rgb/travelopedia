const express = require('express');
const router = express.Router();
const { chat } = require('../controllers/ai.controller');
const { protect } = require('../middlewares/auth.middleware');

// Protected — only authenticated users can use the AI assistant
router.post('/chat', protect, chat);

module.exports = router;
