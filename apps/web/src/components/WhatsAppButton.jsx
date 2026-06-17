import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { MessageCircle } from 'lucide-react';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';

function WhatsAppButton({ 
  className = '', 
  size = 'default', 
  variant = 'default', 
  children 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Only apply WhatsApp green branding if it's the default variant 
  const isDefault = variant === 'default' || !variant;
  const customStyles = isDefault 
    ? 'bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all duration-300' 
    : '';

  return (
    <>
      <Button
        className={`${customStyles} ${className}`}
        size={size}
        variant={variant !== 'default' ? variant : undefined}
        onClick={() => setIsModalOpen(true)}
      >
        {children || (
          <>
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </>
        )}
      </Button>

      <WhatsAppInquiryForm 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </>
  );
}

export default WhatsAppButton;