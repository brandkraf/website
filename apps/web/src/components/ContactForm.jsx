import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [ipAddress, setIpAddress] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      consentGiven: false,
      website: '' // Honeypot
    }
  });

  // Fetch IP address on mount
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.warn('Failed to fetch IP address');
        setIpAddress('');
      }
    };
    fetchIp();
  }, []);

  const checkRateLimit = () => {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    try {
      let submissions = JSON.parse(localStorage.getItem('bk_form_history') || '[]');
      // Keep only submissions within the last hour
      submissions = submissions.filter(time => now - time < oneHour);
      
      if (submissions.length >= 5) {
        return false; // Rate limit exceeded
      }
      
      submissions.push(now);
      localStorage.setItem('bk_form_history', JSON.stringify(submissions));
      return true;
    } catch (e) {
      return true; // Failsafe
    }
  };

  const onSubmit = async (data) => {
    // 1. Check Honeypot
    if (data.website) {
      // Silently accept bots to deter them
      setSubmitStatus('success');
      toast.success('Thank you! Your message has been sent.');
      reset();
      return;
    }

    // 2. Check Rate Limit
    if (!checkRateLimit()) {
      toast.error('Too many requests. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const pageSource = document.referrer || window.location.href;

      // Submit to PocketBase
      // The backend server hook intercepts this creation and automatically 
      // dispatches an email notification to admin@brandkraf.com
      await pb.collection('contact_submissions').create({
        name: data.name,
        phone: data.phone,
        email: data.email,
        businessType: data.businessType,
        message: data.message,
        consentGiven: data.consentGiven,
        pageSource: pageSource,
        ipAddress: ipAddress
      }, { $autoCancel: false });
      
      setSubmitStatus('success');
      toast.success('Thank you! Your message has been sent.');
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl soft-shadow border border-gray-100"
    >
      <AnimatePresence mode="wait">
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-brandkraf-teal/10 border border-brandkraf-teal/20 rounded-lg flex items-start gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-brandkraf-teal flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-brandkraf-teal">Message sent successfully!</h4>
              <p className="text-sm text-brandkraf-teal/80 mt-1">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3"
          >
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-red-600">Failed to send message</h4>
              <p className="text-sm text-red-500/80 mt-1">Please try again or contact us via WhatsApp.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Honeypot Field - Hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            {...register('website')}
          />
        </div>

        <div>
          <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Maya Chen"
            className="mt-1.5 bg-white text-gray-900 border-gray-200 focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 smooth-transition"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+60391343603"
            className="mt-1.5 bg-white text-gray-900 border-gray-200 focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 smooth-transition"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="maya@company.com"
            className="mt-1.5 bg-white text-gray-900 border-gray-200 focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 smooth-transition"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="businessType" className="text-foreground font-medium">Business Type</Label>
          <Select onValueChange={(value) => setValue('businessType', value)}>
            <SelectTrigger className="mt-1.5 bg-white text-gray-900 border-gray-200 focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 smooth-transition">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="saas">SaaS / Tech</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="services">Professional Services</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
          <Textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            placeholder="Tell us about your marketing goals..."
            rows={4}
            className="mt-1.5 bg-white text-gray-900 border-gray-200 focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 smooth-transition resize-none"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-start gap-2.5 pt-2">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="consentGiven"
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-brandkraf-teal focus:ring-brandkraf-teal bg-white"
              {...register('consentGiven', { required: 'You must consent to be contacted.' })}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="consentGiven" className="text-sm text-gray-700 cursor-pointer font-normal leading-tight">
              I consent to being contacted by BrandKraf regarding my inquiry.
            </Label>
            {errors.consentGiven && (
              <p className="text-sm text-red-500 mt-1">{errors.consentGiven.message}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-brandkraf-teal text-white hover:bg-brandkraf-purple smooth-transition rounded-lg mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </motion.div>
  );
}

export default ContactForm;