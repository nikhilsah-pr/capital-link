import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="pt-16 sm:pt-20 lg:pt-28 xl:pt-32 pb-16 sm:pb-20 bg-slate-50 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5 lg:pr-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-[#0b337c] font-bold tracking-widest uppercase text-[13px]">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-poppins font-bold text-[#051124] leading-[1.3]">
              Helping Businesses Grow with <br/>
              Trusted <span className="text-[#0b337c]">Financial Solutions</span>
            </h2>
            
            <div className="space-y-4 max-w-xl">
              <p className="text-[#334155] text-[15px] font-normal leading-relaxed">
                Capital Links is a financial products distribution house providing comprehensive solutions across loans, accounting, and related financial services. We help individuals, entrepreneurs, MSMEs, and corporate organisations identify suitable financial opportunities to achieve their personal and business goals.
              </p>
              <p className="text-[#334155] text-[15px] font-normal leading-relaxed">
                Our approach focuses on understanding each client's financial requirements, assessing funding needs, structuring suitable solutions, and connecting them with appropriate financial institutions and service providers.
              </p>
              <p className="text-[#334155] text-[15px] font-normal leading-relaxed">
                With a commitment to transparency, reliability, and personalised support, Capital Links aims to simplify financial decision-making and make access to financial services more convenient and efficient.
              </p>
            </div>

            <motion.div variants={itemVariants} className="pt-4 pb-2">
              <RouterLink 
                to="/about" 
                className="group cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-[#072557] via-[#0b337c] to-[#124b9f] text-white px-7 py-3.5 rounded-full font-poppins font-semibold text-[14px] tracking-wide shadow-lg shadow-[#0b337c]/25 hover:shadow-xl hover:shadow-[#0b337c]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/10"
              >
                <span>Know More About Us</span>
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white group-hover:bg-[#FACC15] group-hover:text-[#072557] group-hover:translate-x-1 transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </RouterLink>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[20px] overflow-hidden border border-slate-200">
              <img 
                src="/we are.png" 
                alt="Who We Are" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
