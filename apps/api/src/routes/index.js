import { Router } from 'express';
import healthCheck from './health-check.js';
import hitpayRouter from './hitpay.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/hitpay', hitpayRouter);

    return router;
};