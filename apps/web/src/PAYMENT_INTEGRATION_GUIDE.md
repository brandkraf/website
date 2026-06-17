# HitPay Payment Integration Guide

This guide explains how to integrate the HitPay payment system into your application.

## Components Created

### 1. CheckoutPaymentButton.jsx
**Location:** `src/components/CheckoutPaymentButton.jsx`

**Props:**
- `amount` (number): Payment amount in SGD
- `description` (string): Payment description
- `orderId` (string): Unique order identifier
- `customerName` (string): Customer's full name
- `customerEmail` (string): Customer's email address
- `customerPhone` (string): Customer's phone number
- `onPaymentSuccess` (function): Callback when payment is initialized successfully
- `onPaymentError` (function): Callback when payment initialization fails

**Usage:**
```jsx
import { CheckoutPaymentButton } from '../components/CheckoutPaymentButton';

<CheckoutPaymentButton
  amount={99.99}
  description="Order Payment"
  orderId="ORD-2024-001"
  customerName="John Doe"
  customerEmail="john@example.com"
  customerPhone="+65 9123 4567"
  onPaymentSuccess={(data) => console.log('Payment initialized:', data)}
  onPaymentError={(error) => console.error('Payment error:', error)}
/>
```

### 2. CheckoutPage.jsx
**Location:** `src/pages/CheckoutPage.jsx`

A complete checkout page with:
- Customer information form
- Order information form
- Order summary display
- Integrated CheckoutPaymentButton

### 3. PaymentSuccessPage.jsx
**Location:** `src/pages/PaymentSuccessPage.jsx`

Displays after successful payment with:
- Success confirmation message
- Order details (Order ID, Amount, Customer Name)
- Return to home button

**URL Parameters:**
- `orderId`: The order ID from the payment
- `amount`: The amount paid
- `customerName`: The customer's name

### 4. PaymentFailurePage.jsx
**Location:** `src/pages/PaymentFailurePage.jsx`

Displays when payment fails with:
- Error message
- Failure reason
- Retry payment button
- Return to home button

**URL Parameters:**
- `orderId`: The order ID
- `reason`: The failure reason

## Router Setup

Add these routes to your router configuration:

```jsx
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { PaymentFailurePage } from './pages/PaymentFailurePage';

const routes = [
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/payment-success',
    element: <PaymentSuccessPage />,
  },
  {
    path: '/payment-failure',
    element: <PaymentFailurePage />,
  },
  // ... other routes
];
```

## Backend API Endpoints

### POST /hitpay/initialize
Initializes a HitPay payment request.

**Request Body:**
```json
{
  "amount": 99.99,
  "description": "Order Payment",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+65 9123 4567",
  "orderId": "ORD-2024-001"
}
```

**Response:**
```json
{
  "paymentUrl": "https://hitpay.io/pay/...",
  "paymentRequestId": "payment_request_id"
}
```

### POST /hitpay/webhook
Receives HitPay webhook callbacks (server-to-server).

**Webhook Payload:**
```json
{
  "id": "payment_id",
  "status": "completed",
  "reference_number": "ORD-2024-001",
  "amount": "99.99",
  "signature": "hmac_signature"
}
```

## Payment Flow

1. **User fills checkout form** → CheckoutPage
2. **User clicks "Pay Now"** → CheckoutPaymentButton
3. **Button calls `/hitpay/initialize`** → Backend generates payment request
4. **User redirected to HitPay** → Payment gateway
5. **User completes payment** → HitPay redirects to `/payment-success`
6. **Backend receives webhook** → Updates order status

## Environment Variables

The backend requires these environment variables in `.env`:

```
HITPAY_API_KEY=live_...
HITPAY_SALT=...
FRONTEND_URL=http://localhost:5173
API_URL=http://localhost:3001
```

## Error Handling

- **Missing fields:** Returns 400 with error message
- **Invalid amount:** Returns 400 with error message
- **API errors:** Throws error caught by error middleware
- **Webhook signature validation:** Throws error if signature doesn't match

## Testing

1. Navigate to `/checkout`
2. Fill in all required fields
3. Click "Pay Now"
4. You'll be redirected to HitPay payment page
5. Complete payment (use test card if available)
6. You'll be redirected to `/payment-success` with order details

## Notes

- All amounts are in SGD (Singapore Dollar)
- Payment URLs are valid for a limited time
- Webhook signature validation is critical for security
- Order IDs should be unique per transaction
- Customer email is used for payment confirmation