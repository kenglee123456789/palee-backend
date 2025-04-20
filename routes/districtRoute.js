
const express = require('express');
const districtController = require('../controllers/districtController')
const router = express.Router();

router.get('/district',districtController.getDistrict)

module.exports = router;