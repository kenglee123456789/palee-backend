
const express = require('express');
const stayController = require('../controllers/stayController')
const router = express.Router();

router.get('/stay',stayController.getStay)

module.exports = router;
