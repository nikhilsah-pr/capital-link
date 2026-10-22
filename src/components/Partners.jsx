import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Partners = () => {
  const banks = [
    { name: "ICICI Bank", logo: "/ICICI Bank.png" },
    { name: "HDFC Bank", logo: "/HDFC.png" },
    { name: "State Bank of India", logo: "/sbi.png" },
    { name: "Kotak Mahindra Bank", logo: "/kotak-mahindra-bank.png" },
    { name: "Axis Bank", logo: "/AXIS BANK.png" },
    { name: "Bajaj Finserv", logo: "/bajaj-finserv.png" },
    { name: "Tata Capital", logo: "/tata-capital.svg" },
    { name: "Piramal Finance", logo: "/piramal-finance.png" },
    { name: "Bandhan Bank", logo: "/bandhan-bank.png" },
    { name: "Cholamandalam (Chola)", logo: "/chola.png" },
    { name: "IDFC First", logo: "/idfc first bank.png" },
    { name: "IDBI Bank", logo: "/idbi-bank.svg" },
    { name: "InCred", logo: "/Incred.png" },
    { name: "IndusInd Bank", logo: "/IndusInd_Bank.png" },
    { name: "Poonawalla Fincorp", logo: "/Poonawalla fincorp.png" },
    { name: "AU Small Finance", logo: "/AU_Small_Finance.png" },
    { name: "Aditya Birla", logo: "/Aditya.png" },
    { name: "Faicent", logo: "/Faicent.png" },
    { name: "Punjab National Bank", logo: "/Punjab_National_Bank.png" },
    { name: "YES BANK", logo: "/YES BANK.png" }
  ];

  return (
    <section id="partners" className="py-14 sm:py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[#071A36] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>Financial Network</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-[#071A36] tracking-tight"
          >
            Our Trusted <span className="text-[#0D2B57]">Banking Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xs sm:text-sm md:text-[14px] mt-2 max-w-xl mx-auto leading-relaxed"
          >
            Partnered with 25+ premier banks and NBFCs across India to help you secure competitive interest rates and hassle-free loan approvals.
          </motion.p>
        </div>

        {/* Carousel Wrapper with Left & Right Gradient Fade Masks */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Left Gradient Edge Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Edge Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2.5}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 3.2, spaceBetween: 16 },
              640: { slidesPerView: 4.2, spaceBetween: 18 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 6.2, spaceBetween: 20 },
              1280: { slidesPerView: 7.2, spaceBetween: 22 },
            }}
            className="partners-slider py-2"
          >
            {banks.map((bank, index) => (
              <SwiperSlide key={index}>
                <div 
                  title={bank.name}
                  className="group h-[64px] sm:h-[72px] px-4 py-2.5 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(7,26,54,0.06)] hover:border-amber-400/40 transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
                >
                  <img 
                    src={bank.logo} 
                    alt={bank.name} 
                    className="h-6 sm:h-7 md:h-8 w-auto max-w-[110px] sm:max-w-[125px] md:max-w-[135px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> 25+ Institutional Lenders
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Pan-India Banking Tie-ups
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Transparent Comparison & Approvals
          </span>
        </div>

        <style>{`
          .partners-slider .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partners;
