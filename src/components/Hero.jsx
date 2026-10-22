import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Handshake, Users, Trophy, TrendingUp, CheckCircle2, IndianRupee, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] lg:h-screen lg:min-h-[700px] flex flex-col justify-center pt-24 sm:pt-28 lg:pt-16 pb-12 sm:pb-16 lg:pb-0 bg-[#051124] overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[65%_center] sm:bg-[70%_center] lg:bg-[right_top]"
        style={{ 
          backgroundImage: "url('/Background.png')",
        }}
      />

      {/* Ambient Lighting Orbs - Cinematic Depth */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-amber-500/[0.08] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-blue-600/[0.12] rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Responsive Protective Gradient Overlays */}
      {/* Desktop Overlay: Smooth cinematic gradient giving high contrast on left while keeping two professionals & temple background crisp on right */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#051124] via-[#051124]/85 to-transparent hidden lg:block pointer-events-none" />

      {/* Mobile & Tablet Overlay: calibrated gradient ensuring the two people are clearly visible while text contrast is preserved */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#051124]/75 via-[#051124]/40 to-[#051124]/85 sm:bg-gradient-to-r sm:from-[#051124]/90 sm:via-[#051124]/50 sm:to-[#051124]/20 lg:hidden pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 my-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white w-full sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-[58%] xl:w-[55%]"
          >
            {/* Eyebrow Trust Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md text-[#FACC15] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse shadow-[0_0_8px_#FACC15]"></span>
              <span>Premier Financial Distribution House</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-poppins font-extrabold leading-[1.12] sm:leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(5,17,36,0.95)]"
            >
              Make Your<br/>Financial Ideas<br/>
              <span className="bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]">
                Happen.
              </span>
            </motion.h1>
            
            {/* Subheadline Tagline */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-xl md:text-[20px] font-poppins font-semibold text-white/95 mt-3 sm:mt-4 leading-snug drop-shadow-[0_2px_10px_rgba(5,17,36,0.9)]"
            >
              Personalised Lending & Advisory Solutions Across India
            </motion.p>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants} 
              className="text-xs sm:text-sm md:text-[15px] text-slate-300 max-w-lg font-normal leading-relaxed mt-2.5 drop-shadow-[0_2px_8px_rgba(5,17,36,0.9)]"
            >
              Helping Individuals, Entrepreneurs, MSMEs & Corporate Businesses access the right financing with competitive interest rates and seamless institutional sanction.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-6 sm:pt-7 flex flex-col gap-6">
              
              {/* Interactive Service Checkpoint Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {[
                  { name: 'Loan Services', tab: 'loans' },
                  { name: 'Accounting & Tax', tab: 'accounting' }
                ].map((item) => (
                  <Link 
                    key={item.name} 
                    to="services" 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    onClick={() => window.dispatchEvent(new CustomEvent('switch-service-tab', { detail: item.tab }))}
                    className="cursor-pointer group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#FACC15]/50 backdrop-blur-sm text-[13px] sm:text-[14px] text-slate-200 hover:text-[#FACC15] font-medium transition-all duration-300 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] group-hover:scale-110 transition-transform shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Action Buttons & Trust Cue */}
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
                  <Link 
                    to="services" 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    className="cursor-pointer bg-gradient-to-r from-[#FACC15] via-[#FBBF24] to-[#EAB308] hover:from-[#FDE047] hover:to-[#FACC15] text-[#051124] px-7 py-3 sm:py-3.5 rounded-xl font-poppins font-bold flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(250,204,21,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(250,204,21,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-[13px] tracking-wide"
                  >
                    GET STARTED <ArrowRight className="w-4 h-4" />
                  </Link>
                  <RouterLink 
                    to="/talk-to-expert" 
                    className="cursor-pointer bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white px-7 py-3 sm:py-3.5 rounded-xl font-poppins font-semibold flex items-center justify-center gap-2 backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-[13px] tracking-wide"
                  >
                    TALK TO AN EXPERT <Phone className="w-4 h-4" />
                  </RouterLink>
                </div>

                {/* Trust Proof Micro-Badge */}
                <div className="flex items-center gap-2 pt-1 text-slate-300 text-xs">
                  <div className="flex text-[#FACC15] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FACC15]" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9/5</span>
                  <span className="text-slate-400">• Trusted by 500+ Borrowers Across India</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal Stats Card - Responsive Positioning & Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full mt-10 sm:mt-12 lg:mt-0 lg:w-auto lg:absolute lg:-bottom-10 xl:-bottom-12 lg:right-4 xl:right-8 z-20"
        >
          <div className="relative bg-[#07172f]/85 backdrop-blur-2xl border border-white/15 rounded-2xl py-4 sm:py-5 px-3 sm:px-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_30px_rgba(250,204,21,0.04)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full">
              
              {/* Stat 1 */}
              <div className="group flex flex-col items-center justify-center px-3 sm:px-5 md:px-7 py-2 sm:py-0 border-r border-white/10 sm:border-r-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center mb-2.5 text-[#FACC15] group-hover:bg-[#FACC15]/20 group-hover:scale-105 transition-all">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15]" strokeWidth={2} />
                </div>
                <span className="text-[#FACC15] font-extrabold text-[18px] sm:text-[20px] xl:text-[22px] tracking-tight leading-none text-center whitespace-nowrap tabular-nums drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]">
                  <AnimatedCounter end={500} duration={2200} prefix="₹" suffix="+ Cr" separator="," />
                </span>
                <span className="text-slate-300 text-[11px] sm:text-[12px] mt-1.5 font-medium text-center whitespace-nowrap">Loan Assistance</span>
              </div>

              {/* Stat 2 */}
              <div className="group flex flex-col items-center justify-center px-3 sm:px-5 md:px-7 py-2 sm:py-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center mb-2.5 text-[#FACC15] group-hover:bg-[#FACC15]/20 group-hover:scale-105 transition-all">
                  <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15]" strokeWidth={2} />
                </div>
                <span className="text-[#FACC15] font-extrabold text-[18px] sm:text-[20px] xl:text-[22px] tracking-tight leading-none text-center whitespace-nowrap tabular-nums drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]">
                  <AnimatedCounter end={25} duration={1800} suffix="+" />
                </span>
                <span className="text-slate-300 text-[11px] sm:text-[12px] mt-1.5 font-medium text-center whitespace-nowrap">Banking Partners</span>
              </div>

              {/* Stat 3 */}
              <div className="group flex flex-col items-center justify-center px-3 sm:px-5 md:px-7 py-2 sm:py-0 pt-4 sm:pt-0 border-r border-white/10 sm:border-r-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center mb-2.5 text-[#FACC15] group-hover:bg-[#FACC15]/20 group-hover:scale-105 transition-all">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15]" strokeWidth={2} />
                </div>
                <span className="text-[#FACC15] font-extrabold text-[18px] sm:text-[20px] xl:text-[22px] tracking-tight leading-none text-center whitespace-nowrap tabular-nums drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]">
                  <AnimatedCounter end={500} duration={2200} suffix="+" separator="," />
                </span>
                <span className="text-slate-300 text-[11px] sm:text-[12px] mt-1.5 font-medium text-center whitespace-nowrap">Happy Customers</span>
              </div>

              {/* Stat 4 */}
              <div className="group flex flex-col items-center justify-center px-3 sm:px-5 md:px-7 py-2 sm:py-0 pt-4 sm:pt-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center mb-2.5 text-[#FACC15] group-hover:bg-[#FACC15]/20 group-hover:scale-105 transition-all">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#FACC15]" strokeWidth={2} />
                </div>
                <span className="text-[#FACC15] font-extrabold text-[18px] sm:text-[20px] xl:text-[22px] tracking-tight leading-none text-center whitespace-nowrap tabular-nums drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]">
                  <AnimatedCounter end={15} duration={1800} suffix="+" />
                </span>
                <span className="text-slate-300 text-[11px] sm:text-[12px] mt-1.5 font-medium text-center whitespace-nowrap">Years Experience</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Card - Desktop Top Right Corner */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -7, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden lg:block absolute top-28 right-4 md:right-8 lg:right-12 xl:right-16 pointer-events-none z-20"
      >
        <div className="bg-[#09172e]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_25px_rgba(34,197,94,0.12)] relative overflow-hidden pointer-events-auto before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
          
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-semibold text-[14px] tracking-wide">Financial Growth</span>
            </div>
            <div className="p-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-4"></div>
          
          <div className="flex justify-between items-end relative z-10">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-white font-extrabold text-[28px] leading-none tabular-nums drop-shadow-[0_2px_8px_rgba(34,197,94,0.3)]">
                  <AnimatedCounter end={45.8} decimals={1} duration={2000} prefix="+" suffix="%" />
                </span>
                <span className="text-emerald-400 text-[10px] font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  YOY
                </span>
              </div>
              <span className="text-slate-300 text-[11px] mt-2 tracking-wide font-medium">Annual Sanctions</span>
            </div>
          </div>

          {/* Chart SVG Graphic */}
          <div className="absolute bottom-0 right-0 w-[68%] h-[60%] z-0 flex items-end">
            <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M0,55 L20,35 L40,40 L60,15 L80,25 L100,5 L100,60 L0,60 Z" 
                fill="url(#chart-gradient)" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.path 
                d="M0,55 L20,35 L40,40 L60,15 L80,25 L100,5" 
                fill="none" 
                stroke="#22c55e" 
                strokeWidth="2.5" 
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
