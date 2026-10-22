import React from 'react';
import { motion } from 'framer-motion';
import { User, HeadphonesIcon, FileText, FileSearch, ClipboardCheck, Banknote } from 'lucide-react';

const Timeline = () => {
  const steps = [
    { icon: <User className="w-[26px] h-[26px]" />, title: "Share\nRequirement" },
    { icon: <HeadphonesIcon className="w-[26px] h-[26px]" />, title: "Free\nConsultation" },
    { icon: <FileText className="w-[26px] h-[26px]" />, title: "Document\nCollection" },
    { icon: <FileSearch className="w-[26px] h-[26px]" />, title: "Financial\nEvaluation" },
    { icon: <ClipboardCheck className="w-[26px] h-[26px]" />, title: "Approval\n " },
    { icon: <Banknote className="w-[26px] h-[26px]" />, title: "Disbursement\n " }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 md:w-24 bg-[#0b337c]/30"></div>
          <h2 className="text-[22px] md:text-2xl font-poppins font-bold text-[#0b337c] uppercase tracking-wide">
            Our Simple Process
          </h2>
          <div className="h-[1px] w-12 md:w-24 bg-[#0b337c]/30"></div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[36px] left-[8%] right-[8%] h-[1px] bg-gray-300"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 lg:gap-y-0 gap-x-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Arrow placed between circles */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[26px] right-0 translate-x-[calc(50%+8px)] z-20 bg-slate-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
                
                <div className="w-[72px] h-[72px] rounded-full bg-[#0a1a3a] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-[3px] border-white flex items-center justify-center mb-5 relative group-hover:-translate-y-1 transition-transform duration-300 z-10 text-[#FACC15]">
                  {step.icon}
                </div>
                
                <h5 className="text-[#0b337c] font-bold text-[13px] uppercase tracking-wide mb-1.5">
                  STEP {index + 1}
                </h5>
                <h4 className="text-[#051124] font-poppins font-semibold text-[13.5px] leading-[1.4] whitespace-pre-line">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
