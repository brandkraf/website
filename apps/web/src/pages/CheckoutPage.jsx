import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Info, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { CheckoutPaymentButton } from '@/components/CheckoutPaymentButton.jsx';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlService = searchParams.get('service') || '';
  const urlPrice = searchParams.get('price') || '';

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
    amount: urlPrice || '',
    description: urlService || 'BrandKraf Digital Services',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    
    // Automatically adjust amount if it's based on a predefined service price
    if (urlPrice && !isNaN(urlPrice)) {
      setFormData(prev => ({
        ...prev,
        amount: (parseFloat(urlPrice) * newQty).toFixed(2)
      }));
    }
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  const isFormValid = 
    formData.customerName.trim() !== '' &&
    formData.customerEmail.trim() !== '' &&
    formData.customerPhone.trim() !== '' &&
    formData.orderId.trim() !== '' &&
    formData.amount !== '' &&
    parseFloat(formData.amount) > 0;

  return (
    <>
      <Helmet>
        <title>Secure Checkout | BrandKraf</title>
        <meta name="description" content="Secure payment checkout for BrandKraf services." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container-custom max-w-3xl">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Secure Checkout</h1>
            <p className="text-muted-foreground">Complete your payment securely via HitPay.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl"
          >
            {/* Pre-filled Service Info Banner */}
            {urlService && (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-8 flex gap-4 items-start">
                <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-1">Selected Service: {urlService}</h3>
                  <p className="text-muted-foreground text-sm">
                    {urlPrice ? `Base price: RM ${parseFloat(urlPrice).toLocaleString(undefined, {minimumFractionDigits: 2})}.` : ''} Review your details and finalize your payment below.
                  </p>
                </div>
              </div>
            )}

            {/* Customer Information Section */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                Customer Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="customerName" className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="customerEmail" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="customerPhone" className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    placeholder="+60 12 345 6789"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Order Information Section */}
            <div className="mb-10 pb-10 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
                Payment Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Service Payment"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                  />
                </div>

                {urlPrice && (
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Quantity (Months / Packages)
                    </label>
                    <div className="flex items-center h-[50px] bg-background border border-border rounded-xl overflow-hidden w-full max-w-[200px]">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="w-12 h-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="flex-1 text-center font-medium text-foreground">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="w-12 h-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground mb-2">
                    Total Amount (MYR) *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 h-[50px] bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground font-medium"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mb-8 bg-muted/50 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Order Reference:</span>
                  <span className="font-medium text-foreground">{formData.orderId}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Service:</span>
                  <span className="font-medium text-foreground text-right max-w-[200px] truncate">{formData.description || '-'}</span>
                </div>
                <div className="flex justify-between text-muted-foreground pb-4 border-b border-border">
                  <span>Customer Name:</span>
                  <span className="font-medium text-foreground">{formData.customerName || '-'}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-foreground">Total Amount:</span>
                  <span className="text-2xl font-bold text-primary">MYR {formData.amount ? parseFloat(formData.amount).toLocaleString(undefined, {minimumFractionDigits: 2}) : '0.00'}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <CheckoutPaymentButton
              amount={formData.amount ? parseFloat(formData.amount) : 0}
              description={formData.description}
              orderId={formData.orderId}
              customerName={formData.customerName}
              customerEmail={formData.customerEmail}
              customerPhone={formData.customerPhone}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
              disabled={!isFormValid}
            />

            {/* Security Notice */}
            <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Payments are secure and encrypted via HitPay</span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}