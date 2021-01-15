const express = require('express');
const router = express.Router();
const { createPayment, getPayments } =  require('../controllers/payment.controller');


router.get('/payments', createPayment);

router.post('/payments', getPayments);

module.exports = router;