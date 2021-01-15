import express from 'express';
import paymentRoutes from './payments.route';
const router = express.Router();

router.use('/api/v1', paymentRoutes);

export default router;