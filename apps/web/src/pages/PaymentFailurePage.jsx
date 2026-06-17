import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { XCircle, RefreshCcw, Home } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function PaymentFailurePage() {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason') || 'The transaction was declined or cancelled by the user.';

  return (
    <>
      <Helmet>
        <title>Payment Failed | BrandKraf</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background flex items-center justify-center pt-32 pb-24 px-4">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-lg bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-foreground">Payment Failed</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't process your payment at this time. No charges were made to your account.
          </p>

          <div className="bg-destructive/5 rounded-2xl p-6 mb-8 text-left border border-destructive/20">
            <h3 className="font-semibold text-destructive mb-2">Reason for failure:</h3>
            <p className="text-sm text-muted-foreground">{reason}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="rounded-xl h-12 px-6 border-border hover:bg-muted">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button asChild className="rounded-xl h-12 px-6 bg-foreground text-background hover:bg-foreground/90">
              <Link to="/checkout">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Retry Payment
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}