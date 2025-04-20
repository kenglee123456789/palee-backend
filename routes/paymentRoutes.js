const express = require('express')
const paymentcontroller = require('../controllers/paymentController')
const router = express.Router();

router.post('/payment',paymentcontroller.createPayment);

module.exports = router;