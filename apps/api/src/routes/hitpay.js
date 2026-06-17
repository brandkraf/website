import 'dotenv/config';
import express from 'express';
import crypto from 'crypto';
import axios from 'axios';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * Generate HMAC-SHA256 signature for HitPay
 */
function generateSignature(data, salt) {
  const message = Object.keys(data)
    .sort()
    .map(key => `${key}${data[key]}`)
    .join('');
  
  return crypto
    .createHmac('sha256', salt)
    .update(message)
    .digest('hex');
}

/**
 * POST /hitpay/initialize
 * Initialize a HitPay payment request using URLSearchParams format
 */
router.post('/initialize', async (req, res) => {
  const { amount, customerName, customerEmail } = req.body;

  // Input validation
  if (!amount || !customerName || !customerEmail) {
    return res.status(400).json({
      error: 'Missing required fields: amount, customerName, customerEmail',
    });
  }

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }

  // Format amount as string with 2 decimal places
  const formattedAmount = amount.toFixed(2);
  const referenceNumber = 'BK-' + Date.now();

  // Build URLSearchParams
  const params = new URLSearchParams();
  params.append('amount', formattedAmount);
  params.append('currency', 'MYR');
  params.append('email', customerEmail || '');
  params.append('name', customerName || '');
  params.append('purpose', 'BrandKraf Service Payment');
  params.append('reference_number', referenceNumber);
  params.append('redirect_url', 'https://www.brandkraf.com/payment-success');

  const hitpayUrl = 'https://api.hit-pay.com/v1/payment-requests';

  logger.info(`Initializing HitPay payment request`, {
    referenceNumber,
    amount: formattedAmount,
    customerEmail,
    customerName,
  });

  const response = await axios.post(hitpayUrl, params, {
    headers: {
      'X-BUSINESS-API-KEY': process.env.HITPAY_API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  if (!response.data || !response.data.url) {
    logger.error('Invalid HitPay API response structure', {
      status: response.status,
      data: response.data,
    });
    throw new Error('Invalid response from HitPay API: missing payment URL');
  }

  const { url: checkoutUrl } = response.data;

  logger.info(`HitPay payment request created successfully`, {
    referenceNumber,
    checkoutUrl,
  });

  res.json({
    success: true,
    checkout_url: checkoutUrl,
  });
});

/**
 * POST /hitpay/webhook
 * Receive and validate HitPay webhook callback
 */
router.post('/webhook', async (req, res) => {
  const webhookData = req.body;

  logger.info('Received HitPay webhook', { webhookData });

  // Extract signature from webhook
  const { signature, ...dataWithoutSignature } = webhookData;

  if (!signature) {
    logger.error('HitPay webhook missing signature');
    throw new Error('Webhook signature is required');
  }

  // Validate signature
  const expectedSignature = generateSignature(dataWithoutSignature, process.env.HITPAY_SALT);

  if (signature !== expectedSignature) {
    logger.error('Invalid HitPay webhook signature', {
      received: signature,
      expected: expectedSignature,
      data: dataWithoutSignature,
    });
    throw new Error('Invalid webhook signature');
  }

  const { status, reference_number, amount, id } = webhookData;

  if (status === 'completed') {
    logger.info('Payment completed', {
      orderId: reference_number,
      amount,
      paymentId: id,
    });
    // TODO: Update order status in database
  } else if (status === 'failed' || status === 'cancelled') {
    logger.warn('Payment failed or cancelled', {
      orderId: reference_number,
      status,
      paymentId: id,
    });
    // TODO: Update order status in database
  } else {
    logger.info('Payment status update', {
      orderId: reference_number,
      status,
      paymentId: id,
    });
  }

  // Always return 200 to acknowledge webhook receipt
  res.json({ success: true });
});

export default router;