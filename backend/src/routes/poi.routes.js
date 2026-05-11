const express = require('express');
const router = express.Router();
const { getPOIs, getPOIsInRadius, createPOI } = require('../controllers/poi.controller');
const { protect } = require('../middlewares/auth.middleware');

// Public routes for map discovery
router.route('/').get(getPOIs);
router.route('/radius/:lat/:lng/:distance').get(getPOIsInRadius);

// Protected routes for admin/system additions
router.route('/').post(protect, createPOI);

module.exports = router;
