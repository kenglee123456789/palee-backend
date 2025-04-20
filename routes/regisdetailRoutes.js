const express = require('express');
const regisdetailController = require('../controllers/regisdetailController')
const router = express.Router();

router.post('/regisdetail', regisdetailController.CreateRegisdetail);
module.exports = router;