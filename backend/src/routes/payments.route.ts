import express from 'express';
import { createPayment , getPayments } from '../controllers/payment.controller';
const router = express.Router();


router.get('/payments', getPayments);

router.post('/payments', createPayment);

export default router;