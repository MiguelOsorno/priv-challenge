const express = require('express');
const router = express.Router();
const paymentRoutes = require('./payments.route');

router.use('/api/v1', paymentRoutes);

module.exports = router;