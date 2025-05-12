const express = require('express');
const regisdetailController = require('../controllers/regisdetailController')
const router = express.Router();

router.post('/regisdetail', regisdetailController.CreateRegisdetail);
router.get('/regisdetail', regisdetailController.showRegisdetail);
module.exports = router;
