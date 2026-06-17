import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, Home, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get('reference') || searchParams.get('order_id') || 'REF-' + Math.floor(Math.random() * 1000000);
  const amount = searchParams.get('amount') || '0.00';
  const email = searchParams.get('email') || 'Customer';

  return (
    <>
      <Helmet>
        <title>Payment Successful | BrandKraf</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background flex items-center justify-center pt-32 pb-24 px-4">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandkraf-teal/10 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-lg bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-brandkraf-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brandkraf-teal" />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-foreground">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your payment. Your transaction has been completed successfully and a receipt has been emailed to you.
          </p>

          <div className="bg-muted/50 rounded-2xl p-6 mb-8 text-left border border-border">
            <h3 className="font-semibold text-foreground mb-4 border-b border-border pb-2">Transaction Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference ID:</span>
                <span className="font-medium text-foreground">{reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Customer:</span>
                <span className="font-medium text-foreground">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium text-foreground">{new Date().toLocaleDateString()}</span>
              </div>
              {amount !== '0.00' && (
                <div className="flex justify-between pt-3 border-t border-border mt-3">
                  <span className="font-semibold text-foreground">Amount Paid:</span>
                  <span className="font-bold text-brandkraf-teal">MYR {amount}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="rounded-xl h-12 px-6" onClick={() => alert('Invoice download will be available soon.')}>
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
            <Button asChild className="rounded-xl h-12 px-6 bg-brandkraf-teal hover:bg-brandkraf-teal/90 text-white">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}