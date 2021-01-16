import express from 'express';
import { createPayment , getPayments } from '../controllers/payment.controller';
import { parseQuery } from '../middlewares/parse-int';
const router = express.Router();


router.get('/payments', parseQuery, getPayments);

router.post('/payments', createPayment);

export default router;