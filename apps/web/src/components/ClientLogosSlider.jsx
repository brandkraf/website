import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function ClientLogosSlider() {
  const isMobile = useIsMobile();
  
  const logos = [
    { 
      id: 1, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/d88b10e3d123a1d831b83172fde9a86f.png', 
      alt: 'KTM logo' 
    },
    { 
      id: 2, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/d3fa27bf2552353538a6f925980a6ca4.png', 
      alt: 'Mitsubishi Corporation logo' 
    },
    { 
      id: 3, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/356502913d0a76953c35417fd54316e7.png', 
      alt: 'AIA logo' 
    },
    { 
      id: 4, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/a410d86aabca88b3b50dee0bb385c1de.png', 
      alt: 'UMPSA logo' 
    },
    { 
      id: 5, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/3d81704876f34790615294bef3fbb2f9.png', 
      alt: 'MYDIN logo' 
    },
    { 
      id: 6, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/b0520e189fd94f381d66a92648019e1f.png', 
      alt: 'UPM logo' 
    },
    { 
      id: 7, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/1a5e9097dbab21f4ee2dfaa14796acf7.png', 
      alt: 'Rocafé logo' 
    },
    { 
      id: 8, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/3376f04d5cd283871a2dc874e5069212.png', 
      alt: 'Mazta Home logo' 
    },
    { 
      id: 9, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/99b9e9dcb78efb1ce1f4c6a1dd7d0d78.png', 
      alt: 'Marina Island Pangkor logo' 
    },
    { 
      id: 10, 
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/814ec6c881c1ad2a46bbef542c54e4f1.png', 
      alt: 'Dr. Sonia Qualitas Health Klinik logo' 
    },
    {
      id: 11,
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/3f519f3ae4def0c6ccdef18f9a032fa9.png',
      alt: 'P&GLOW logo'
    },
    {
      id: 12,
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/e4dbed8f506a9c978f03512aa8e2f8e4.png',
      alt: "Riel'Z logo"
    },
    {
      id: 13,
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/fa99c5226a8c3d85cc2778e7e956f1e0.png',
      alt: 'Roots Rock Kafe logo'
    },
    {
      id: 14,
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/4512b45f5565221c0169050395b002a2.png',
      alt: 'Kementerian Pelancongan Seni dan Budaya logo'
    },
    {
      id: 15,
      url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/18dc0fab12e1436252f5e5c40b22e519.png',
      alt: 'Stellar Print logo'
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden relative border-y border-gray-100">
      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none w-16 md:w-32" />
      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none w-16 md:w-32" />
      
      <div className="container-custom mb-12 relative z-20">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Trusted by <span className="text-gradient">200+ leading brands</span>
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            From ambitious startups to national brands and government agencies
          </p>
        </motion.div>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-20 w-max px-4 md:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: isMobile ? 80 : 60, // Slower on mobile to reduce rendering strain
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="relative flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-[120px] md:w-[160px] group cursor-pointer"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 drop-shadow-sm group-hover:drop-shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ClientLogosSlider;