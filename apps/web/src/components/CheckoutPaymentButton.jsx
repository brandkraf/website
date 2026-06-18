import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import apiServerClient from '@/lib/apiServerClient.js';

export function CheckoutPaymentButton({
  amount,
  description,
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  onPaymentSuccess,
  onPaymentError,
  disabled
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      // Validate required fields
      if (!amount || !description || !orderId || !customerName || !customerEmail || !customerPhone) {
        toast.error('Missing required payment information');
        onPaymentError?.(new Error('Missing required fields'));
        return;
      }

      // Call HitPay initialize endpoint
      const response = await apiServerClient.fetch('/hitpay/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
          orderId,
          customerName,
          customerEmail,
          customerPhone,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to initialize payment');
      }

      const data = await response.json();
      const { checkout_url } = data;

      if (!checkout_url) {
        throw new Error('No checkout URL received from server');
      }

      // Redirect to HitPay secure checkout page
      try {
        // Check if we are in an iframe (like a preview environment)
        if (window.top !== window.self) {
          window.open(checkout_url, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = checkout_url;
        }
      } catch (e) {
        // Fallback if window.top access throws cross-origin error
        window.open(checkout_url, '_blank', 'noopener,noreferrer');
      }

      // Call success callback (though redirect happens immediately)
      onPaymentSuccess?.({ orderId });
    } catch (error) {
      console.error('Payment initialization error:', error);
      const errorMessage = error.message || 'Failed to initialize payment';
      toast.error(errorMessage);
      onPaymentError?.(error);
      setIsLoading(false); // Only reset loading if there's an error, otherwise keep it spinning during redirect
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || disabled}
      className="w-full bg-brandkraf-teal hover:bg-brandkraf-teal/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brandkraf-teal/20"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Redirecting to Secure Checkout...
        </>
      ) : (
        'Proceed to Payment'
      )}
    </button>
  );
}