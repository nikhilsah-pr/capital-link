import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, Clock, MapPin, Users, PieChart, Landmark, Award } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    { icon: <Shield className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "One Stop\nFinancial Solution" },
    { icon: <RefreshCw className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "100%\nTransparent Process" },
    { icon: <Clock className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "Quick Loan\nApprovals" },
    { icon: <MapPin className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "PAN India\nService" },
    { icon: <Users className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "Dedicated\nRelationship Manager" },
    { icon: <PieChart className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "Customized\nFinancial Planning" },
    { icon: <Landmark className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "Multiple\nBanking Partners" },
    { icon: <Award className="w-[22px] h-[22px]" strokeWidth={1.5} />, title: "Trusted\nFinancial Advisors" }
  ];

  return (
    <section id="industries" className="py-20 bg-[#071A36] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-3xl font-poppins font-bold text-white uppercase tracking-wide"
          >
            Why Choose <span className="text-[#FACC15]">Capitallinks?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-10 lg:gap-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-2 group ${index !== features.length - 1 ? 'lg:border-r lg:border-white/20' : ''}`}
            >
              <div className="w-[52px] h-[52px] rounded-full border border-[#FACC15] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                <div className="text-[#FACC15]">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-white font-poppins font-normal text-[12.5px] leading-[1.6] whitespace-pre-line">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
