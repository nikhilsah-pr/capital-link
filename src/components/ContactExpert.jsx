import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck, UserCheck, Sparkles, PhoneCall } from 'lucide-react';

const ContactExpert = () => {
  const channels = [
    {
      title: "Call Us",
      value: "9263636474",
      displayValue: "+91 9263636474",
      actionText: "Call Now",
      href: "tel:+919263636474",
      icon: Phone,
      color: "from-amber-500/10 to-yellow-500/10",
      btnColor: "bg-[#FACC15] hover:bg-[#e6b800] text-[#051124]"
    },
    {
      title: "Email Us",
      value: "mahesh@capitallinks.in",
      displayValue: "mahesh@capitallinks.in",
      actionText: "Email",
      href: "mailto:mahesh@capitallinks.in",
      icon: Mail,
      color: "from-blue-500/10 to-indigo-500/10",
      btnColor: "bg-[#0b337c] hover:bg-[#072458] text-white"
    },
    {
      title: "Visit Our Website",
      value: "www.capitallinks.in",
      displayValue: "www.capitallinks.in",
      actionText: "Visit",
      href: "https://www.capitallinks.in",
      icon: Globe,
      color: "from-emerald-500/10 to-teal-500/10",
      btnColor: "bg-[#009b55] hover:bg-[#007a43] text-white",
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
            <span className="text-xs md:text-sm font-poppins font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
              PERSONALIZED FINANCIAL GUIDANCE
            </span>
            <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-poppins font-extrabold text-[#071A36] tracking-tight leading-tight mb-4">
            Talk to a <span className="text-[#1864d8]">Financial Expert</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-2xl mx-auto">
            Need help choosing the right loan or financial service? Connect with our expert for personalized guidance and support tailored to your needs.
          </p>
        </div>

        {/* Main Grid: Expert Profile Card + 3 Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Expert Profile Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#071A36] via-[#0b244d] to-[#0f346c] text-white rounded-[24px] p-8 sm:p-10 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Glow in background */}
            <div className="absolute -right-8 -top-8 w-44 h-44 bg-[#FACC15]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FACC15]/20 text-[#FACC15] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dedicated Advisor</span>
              </div>

              {/* Avatar & Identification */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#FACC15] to-[#fde047] text-[#051124] flex items-center justify-center font-poppins font-extrabold text-2xl sm:text-3xl shadow-lg shadow-black/30 shrink-0">
                  MK
                </div>
                <div>
                  <h3 className="text-2xl sm:text-[26px] font-poppins font-extrabold text-white leading-tight">
                    Mahesh Kumar
                  </h3>
                  <p className="text-[#FACC15] font-semibold text-sm sm:text-[15px] mt-0.5">
                    Financial Services Expert
                  </p>
                  <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold mt-1">
                    Capitallinks
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-6"></div>

              {/* Value Proposition bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>Unbiased advice across 25+ banking partners</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <UserCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>Customized Loan & Accounting Structuring</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="relative z-10 pt-8 mt-auto">
              <a 
                href="tel:+919263636474"
                className="w-full bg-[#FACC15] hover:bg-[#e6b800] text-[#051124] py-3.5 px-6 rounded-xl font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Directly: +91 9263636474</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3 Contact Action Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {channels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-[22px] p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-slate-50 group-hover:bg-[#071A36] text-[#071A36] group-hover:text-[#FACC15] flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                      {channel.title}
                    </h4>

                    <p className="text-[15px] sm:text-base font-bold text-[#071A36] font-poppins break-all sm:break-normal mb-6">
                      {channel.displayValue}
                    </p>
                  </div>

                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className={`w-full py-3 px-4 rounded-xl font-poppins font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${channel.btnColor}`}
                  >
                    <span>{channel.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200/90 rounded-[22px] p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#071A36]">
              Your financial goals deserve the right guidance.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Reach out today to discuss custom loan options or tax and compliance solutions.
            </p>
          </div>

          <a
            href="tel:+919263636474"
            className="group shrink-0 cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-[#071A36] via-[#0b244d] to-[#124294] text-white px-8 py-3.5 rounded-full font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/10"
          >
            <span>Talk to Our Expert</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-[#051124] group-hover:translate-x-1 transition-all duration-300">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactExpert;
