import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Home, Building2, User, MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      category: "Business Loan",
      badgeText: "Business Loan",
      icon: Building2,
      rating: 5,
      name: "Rajesh Kumar",
      business: "Manufacturing Unit Owner",
      location: "Jamshedpur",
      text: "Capital Links helped us explore the right working capital loan for our business. Their transparent guidance and professional support made the application process much easier.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
    },
    {
      category: "Business Loan",
      badgeText: "Business Loan",
      icon: Building2,
      rating: 4.5,
      name: "Sandeep Agarwal",
      business: "Business Owner",
      location: "Ranchi",
      text: "The team understood our business funding requirements and explained the available loan options clearly. Their support helped us make a more informed financial decision.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80"
    },
    {
      category: "Loan Against Property (LAP)",
      badgeText: "LAP",
      icon: Home,
      rating: 5,
      name: "Amit Sharma",
      business: "Entrepreneur",
      location: "Jamshedpur",
      text: "I needed funding for business expansion and wanted to understand Loan Against Property options. Capital Links guided me through the documentation and eligibility requirements professionally.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80"
    },
    {
      category: "Loan Against Property (LAP)",
      badgeText: "LAP",
      icon: Home,
      rating: 4,
      name: "Priya Singh",
      business: "Retail Business Owner",
      location: "Dhanbad",
      text: "Capital Links explained the process in simple terms and helped me understand the financing options available against my property. The communication and guidance were helpful throughout.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    {
      category: "Personal Loan",
      badgeText: "Personal Loan",
      icon: User,
      rating: 5,
      name: "Rahul Verma",
      business: "Salaried Professional",
      location: "Bokaro",
      text: "I was looking for a personal loan and needed clarity on eligibility, documentation, and repayment. The Capital Links team explained everything clearly and professionally.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80"
    },
    {
      category: "Personal Loan",
      badgeText: "Personal Loan",
      icon: User,
      rating: 4.5,
      name: "Sneha Kumari",
      business: "Private Sector Employee",
      location: "Jamshedpur",
      text: "The team was approachable and responsive to my queries. Their guidance helped me understand the personal loan application process and the factors to consider before choosing an option.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-[18px] h-[18px] text-[#FACC15] fill-[#FACC15]" />
        ))}
        {hasHalfStar && (
          <div className="relative w-[18px] h-[18px] shrink-0">
            <Star className="w-[18px] h-[18px] text-[#e2e8f0] fill-[#e2e8f0] absolute top-0 left-0" />
            <div className="overflow-hidden absolute top-0 left-0 w-[50%] h-full">
              <Star className="w-[18px] h-[18px] text-[#FACC15] fill-[#FACC15]" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-[18px] h-[18px] text-[#e2e8f0] fill-[#e2e8f0]" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#f8f9fc] relative overflow-hidden">
      {/* Decorative Curved Background */}
      <div className="absolute top-0 left-0 w-full h-[400px] md:h-[450px] bg-[#051124] rounded-b-[100px] md:rounded-b-[300px] lg:rounded-b-[50%] scale-x-125 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        
        <div className="text-center mb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-4"
          >
            REAL CLIENT EXPERIENCES
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[42px] font-poppins font-extrabold text-white tracking-wide"
          >
            Client <span className="text-[#FACC15]">Testimonials</span>
          </motion.h2>

          <p className="text-white/85 mt-4 max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-relaxed">
            Read what our clients across business loans, loan against property, and personal financing have to say about working with Capital Links.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => {
            const BadgeIcon = testimonial.icon;
            return (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100/90 hover:shadow-[0_12px_35px_rgba(7,26,54,0.09)] transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  
                  <div>
                    {/* Top Row: Stars on left, Category Pill on right */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      {renderStars(testimonial.rating)}

                      <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] text-[#2563eb] border border-[#dbeafe] px-3 py-1 rounded-full text-xs font-bold tracking-wide shrink-0">
                        <BadgeIcon className="w-3.5 h-3.5 stroke-[2.2]" />
                        <span>{testimonial.badgeText}</span>
                      </span>
                    </div>

                    {/* Testimonial Quote with Leading Quote mark */}
                    <div className="text-slate-700 italic font-normal text-[14px] sm:text-[14.5px] leading-[1.65] mb-5">
                      <span className="text-[#94a3b8] text-2xl font-serif font-black leading-none mr-1 select-none">
                        “
                      </span>
                      {testimonial.text}
                    </div>
                  </div>

                  {/* Bottom Divider & Author Info with Location */}
                  <div>
                    <div className="w-full h-px bg-slate-100 my-4" />

                    <div className="flex items-center gap-3.5">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-poppins font-bold text-[#051124] text-[15px] leading-snug truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                          {testimonial.business}
                        </p>
                        <div className="flex items-center gap-1 text-[11.5px] text-slate-400 mt-1">
                          <MapPin className="w-3 h-3 text-[#2563eb] shrink-0" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
