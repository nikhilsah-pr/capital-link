import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Landmark, 
  Calculator, 
  Handshake, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const corePillars = [
    {
      title: "Loan Solutions",
      desc: "Flexible personal, home, MSME & commercial credit facilities tailored to your requirements.",
      icon: Landmark
    },
    {
      title: "Accounting Services",
      desc: "Precision GST filing, income tax, bookkeeping, and statutory compliance management.",
      icon: Calculator
    },
    {
      title: "Business Finance",
      desc: "Working capital, OD & CC, project finance, and machinery loan distribution.",
      icon: TrendingUp
    }
  ];

  const expertiseCards = [
    {
      title: "Loan & Credit Solutions",
      desc: "Business loans, personal loans, home loans, LAP, working capital, OD & CC, and project finance.",
      icon: Landmark
    },
    {
      title: "Accounting Services",
      desc: "GST filing, income tax, bookkeeping, payroll, business registration, and compliance support.",
      icon: Calculator
    },
    {
      title: "Financial Guidance",
      desc: "Support in understanding funding requirements and exploring suitable financial options.",
      icon: Handshake
    },
    {
      title: "Business Finance Support",
      desc: "Financial solutions designed around business needs, growth plans, and operational requirements.",
      icon: Briefcase
    }
  ];

  const stats = [
    { end: 500, prefix: "₹", suffix: "+ Cr", label: "Loan Assistance" },
    { end: 25, prefix: "", suffix: "+", label: "Banking Partners" },
    { end: 500, prefix: "", suffix: "+", label: "Happy Customers" },
    { end: 15, prefix: "", suffix: "+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-poppins selection:bg-[#FACC15] selection:text-[#051124]">
      <Navbar />

      {/* Hero Page Header */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-[#051124] text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          {/* Back Link & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <RouterLink 
              to="/" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#FACC15] transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </RouterLink>
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <RouterLink to="/" className="hover:text-white transition-colors">Home</RouterLink>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[#FACC15] font-medium">About Capital Links</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/30 text-[#FACC15] text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-4">
              CAPITAL LINKS
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-poppins font-extrabold tracking-tight text-white mb-4 leading-tight">
              YOUR FINANCIAL <span className="text-[#D4AF37]">PARTNER</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Empowering individuals, entrepreneurs, MSMEs, and corporate businesses with tailored financial solutions and trusted funding access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ABOUT CAPITAL LINKS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
              <span className="text-xs md:text-sm font-poppins font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                ABOUT CAPITAL LINKS
              </span>
              <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extrabold text-[#071A36] tracking-tight leading-tight mb-3">
              Connecting You to the <span className="text-[#1864d8]">Right Financial Solutions.</span>
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#0b337c] mb-4">
              Your Trusted Loan & Financial Services Partner
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
              Empowering individuals, entrepreneurs, MSMEs, and corporate businesses with tailored financial solutions, professional guidance, and access to suitable funding opportunities.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-50 hover:bg-[#eef5ff] border border-slate-200/90 hover:border-blue-300/80 rounded-2xl p-7 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#1864d8] text-[#1864d8] group-hover:text-white flex items-center justify-center shadow-sm transition-colors duration-300 mb-5">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-[#071A36] group-hover:text-[#1864d8] transition-colors mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: WHO WE ARE */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#0b337c] font-bold tracking-widest uppercase text-xs sm:text-[13px] bg-blue-100/70 px-3 py-1 rounded-md">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[38px] font-poppins font-extrabold text-[#071A36] leading-[1.25] tracking-tight">
                Your Goals. <br/>
                <span className="text-[#0b337c]">Our Financial Expertise.</span>
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
                <p>
                  <strong>Capital Links</strong> is a financial products distribution house committed to helping individuals and businesses navigate their financial needs with greater clarity and confidence.
                </p>
                <p>
                  We bring together loan distribution, accounting services, and business financial support under one roof, helping clients explore appropriate solutions for personal milestones, business development, and long-term financial objectives.
                </p>
                <p>
                  We understand that every financial journey is different. Whether you are an individual planning a major purchase, an entrepreneur looking to expand, or an established business seeking additional funding, our approach begins with understanding your specific requirements.
                </p>
                <p>
                  Through personalised guidance and connections with suitable financial institutions and service providers, we aim to make the process of exploring financial solutions simpler, more transparent, and more convenient.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <RouterLink 
                  to="/talk-to-expert"
                  className="cursor-pointer inline-flex items-center gap-2 bg-[#0b337c] hover:bg-[#072458] text-white px-7 py-3 rounded-xl font-poppins font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-[#FACC15]" />
                  <span>Talk to an Expert</span>
                </RouterLink>
                <RouterLink 
                  to="/#services"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="cursor-pointer inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#071A36] border border-slate-200 px-6 py-3 rounded-xl font-poppins font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4 text-[#0b337c]" />
                </RouterLink>
              </div>
            </motion.div>

            {/* Right Card Column: Image & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="rounded-2xl overflow-hidden border border-slate-100 mb-6 shadow-sm">
                  <img 
                    src="/we are.png" 
                    alt="Who We Are - Capital Links" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#071A36] font-poppins tabular-nums">
                        <AnimatedCounter 
                          end={stat.end} 
                          duration={2000} 
                          prefix={stat.prefix} 
                          suffix={stat.suffix} 
                          separator="," 
                        />
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3: OUR EXPERTISE (Exact Dark Cards Layout from Image) */}
      <section className="py-20 sm:py-24 bg-[#051124] text-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-poppins font-extrabold text-white tracking-tight">
              Our Expertise
            </h2>
            <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full"></div>
          </div>

          {/* 4 Sleek Dark Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {expertiseCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#0b1629]/90 hover:bg-[#0e1d36] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 group"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#D4AF37] stroke-[1.6]" />
                  </div>
                  <h3 className="text-xl sm:text-[22px] font-poppins font-bold text-white group-hover:text-[#FACC15] transition-colors mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom Call To Action Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-[#071A36] via-[#0b2b63] to-[#124294] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden text-center md:text-left">
            <div className="relative z-10">
              <span className="text-[#FACC15] font-bold text-xs uppercase tracking-widest block mb-2">
                LET'S ACHIEVE YOUR FINANCIAL GOALS
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extrabold tracking-tight mb-3">
                Ready to Partner with Capital Links?
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Connect with our senior consultants today to explore tailored loan and accounting solutions.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <RouterLink
                to="/#contact"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group cursor-pointer inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#e6b800] text-[#051124] px-8 py-4 rounded-full font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
