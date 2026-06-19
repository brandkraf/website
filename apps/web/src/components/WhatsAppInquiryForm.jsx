import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabaseClient.js';

function WhatsAppInquiryForm({ open, onOpenChange }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // 1. Save to Supabase 'inquiries' table
      const { error: sbError } = await supabase.from('inquiries').insert({
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        service_interested: 'WhatsApp Strategy Call',
        message: data.message,
      });
      if (sbError) throw sbError;

      // 2. Construct WhatsApp Message
      const waText = `Hello BrandKraf! I'd like to book a strategy call.\n\n*Name:* ${data.fullName}\n*Email:* ${data.email}\n*Phone:* ${data.phoneNumber}\n*Message:* ${data.message}`;
      const encodedText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/601121017939?text=${encodedText}`;

      toast.success("Inquiry received! Redirecting to WhatsApp...");

      // 3. Redirect, reset, and close
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white text-gray-900 border border-gray-100 shadow-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-900 font-bold tracking-tight">
            Get Your Free Strategy Call
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-base mt-2 leading-relaxed">
            Fill out the form below. Once submitted, you'll be redirected to WhatsApp to chat with our team immediately.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name <span className="text-brandkraf-teal">*</span></Label>
            <Input
              id="fullName"
              {...register('fullName', { required: 'Name is required' })}
              placeholder="e.g. Maya Chen"
              className="bg-gray-50 text-gray-900 border-transparent focus:bg-white focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 transition-all duration-200 h-11"
            />
            {errors.fullName && <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address <span className="text-brandkraf-teal">*</span></Label>
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
                className="bg-gray-50 text-gray-900 border-transparent focus:bg-white focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 transition-all duration-200 h-11"
              />
              {errors.email && <p className="text-sm text-destructive font-medium">{errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number <span className="text-brandkraf-teal">*</span></Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                placeholder="+60 12-345 6789"
                className="bg-gray-50 text-gray-900 border-transparent focus:bg-white focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 transition-all duration-200 h-11"
              />
              {errors.phoneNumber && <p className="text-sm text-destructive font-medium">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-gray-700 font-medium">Message / Inquiry <span className="text-brandkraf-teal">*</span></Label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="Tell us briefly about your brand and what you're looking to achieve..."
              rows={4}
              className="bg-gray-50 text-gray-900 border-transparent focus:bg-white focus:border-brandkraf-teal focus:ring-2 focus:ring-brandkraf-teal/20 transition-all duration-200 resize-none py-3"
            />
            {errors.message && <p className="text-sm text-destructive font-medium">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-brandkraf-teal text-white hover:bg-brandkraf-purple transition-all duration-300 rounded-xl h-12 text-base font-semibold shadow-lg shadow-brandkraf-teal/20 hover:shadow-brandkraf-purple/20 mt-6 active:scale-[0.98]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Connecting...
              </>
            ) : (
              'Submit & Chat on WhatsApp'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default WhatsAppInquiryForm;