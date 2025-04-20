
const express = require('express');
const billController = require('../controllers/billController');
const router = express.Router();

router.get('/bill', billController.getNextBillID);
module.exports = router;
