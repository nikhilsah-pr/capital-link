import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  PhoneCall, 
  CheckCircle2, 
  Send, 
  Clock, 
  Target, 
  Compass, 
  Check,
  Building2,
  Lock,
  MessageSquare
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TalkToExpert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Business Loan',
    loanAmount: '₹25L - ₹1 Crore',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahesh@capitallinks.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const channels = [
    {
      id: "call",
      title: "Call Us",
      value: "+91 9263636474",
      rawNumber: "9263636474",
      description: "Direct phone consultation with Mahesh Kumar for immediate requirements and fast assessments.",
      actionText: "Call Now",
      href: "tel:+919263636474",
      icon: Phone,
      badge: "Fastest Response",
      accent: "#f5c518",
      btnStyle: "bg-[#f5c518] hover:bg-[#e5b712] text-[#051124]"
    },
    {
      id: "email",
      title: "Email Us",
      value: "mahesh@capitallinks.in",
      description: "Send your financial documents or detailed loan requirements for structured analysis.",
      actionText: "Email",
      href: "mailto:mahesh@capitallinks.in",
      icon: Mail,
      badge: "Document Review",
      accent: "#38bdf8",
      btnStyle: "bg-[#0b337c] hover:bg-[#072458] text-white"
    },
    {
      id: "website",
      title: "Visit Our Website",
      value: "www.capitallinks.in",
      description: "Explore our complete suite of loan solutions, accounting tools, and company services.",
      actionText: "Visit",
      href: "https://www.capitallinks.in",
      icon: Globe,
      badge: "Official Portal",
      accent: "#00a86b",
      btnStyle: "bg-[#00a86b] hover:bg-[#00925d] text-white",
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-poppins selection:bg-[#FACC15] selection:text-[#051124] overflow-x-hidden">
      <Navbar />

      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#051124] text-white overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-amber-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-blue-600/[0.12] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-6xl">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <RouterLink 
              to="/" 
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-300 hover:text-[#f5c518] transition-colors bg-white/[0.06] hover:bg-white/[0.12] px-3.5 sm:px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Home
            </RouterLink>
            
            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-400">
              <RouterLink to="/" className="hover:text-white transition-colors">Home</RouterLink>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[#f5c518] font-semibold">Talk to an Expert</span>
            </div>
          </div>

          {/* Hero Titles */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md text-[#f5c518] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f5c518]" />
              <span>PERSONALIZED FINANCIAL GUIDANCE</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.15]">
              Talk to a <span className="bg-gradient-to-r from-[#FDE047] via-[#f5c518] to-[#EAB308] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,197,24,0.25)]">Financial Expert</span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-[17px] max-w-2xl mx-auto font-normal leading-relaxed">
              Need help choosing the right loan or financial service? Connect with our expert for personalized guidance and support tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      {/* Crisp separation matching user reference: positive padding on white background */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl pt-8 sm:pt-12 pb-16 relative z-20">
        
        {/* ================= 1. ADVISOR SHOWCASE (EXACT USER REFERENCE LAYOUT) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#071A36] via-[#092247] to-[#071d3d] text-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(7,26,54,0.18)] border border-white/10 mb-12 sm:mb-16 relative overflow-hidden"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#f5c518]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Advisor Profile */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Avatar Box with Green Available Badge */}
              <div className="relative mb-4 sm:mb-5 inline-block">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-[#f5c518] text-[#051124] flex items-center justify-center font-poppins font-black text-2xl sm:text-4xl shadow-xl">
                  MK
                </div>
                {/* Green Available Badge */}
                <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-2 bg-[#00a86b] text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-md border-2 border-[#071A36]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Dedicated Advisor Pill */}
              <div className="inline-block bg-[#132845] text-[#f5c518] border border-[#f5c518]/30 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2.5 sm:mb-3">
                DEDICATED ADVISOR
              </div>

              {/* Name & Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-poppins font-extrabold text-white tracking-tight leading-tight">
                Mahesh Kumar
              </h2>
              <p className="text-[#f5c518] font-bold text-xs sm:text-sm md:text-base mt-1">
                Financial Services Expert
              </p>
              <p className="text-slate-400 text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-widest uppercase mt-0.5">
                Capitallinks
              </p>
            </div>

            {/* Right Column: Cards, Trust & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
              
              {/* Top Row: Customized Loan & Pan-India Support Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* Card 1: Customized Loan */}
                <div className="bg-[#0c2242] border border-white/5 rounded-2xl p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#f5c518]/15 text-[#f5c518] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-white font-poppins">
                      Customized Loan
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Tailored funding structures across Business, Home, LAP & Working Capital loans to match your exact business cash flows.
                  </p>
                </div>

                {/* Card 2: Pan-India Support */}
                <div className="bg-[#0c2242] border border-white/5 rounded-2xl p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/15 text-sky-400 flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-white font-poppins">
                      Pan-India Support
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Complete end-to-end liaison, documentation, and sanction assistance across all Indian states and business cities.
                  </p>
                </div>

              </div>

              {/* Middle Row: Trust Points */}
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f5c518] shrink-0" />
                  <span>25+ Banking & NBFC Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#f5c518] shrink-0" />
                  <span>100% Confidential Advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f5c518] shrink-0" />
                  <span>Prompt Response Guarantee</span>
                </div>
              </div>

              {/* Bottom Row: Call Directly & Copy Email Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+919263636474"
                  className="flex-1 bg-[#f5c518] hover:bg-[#e5b712] text-[#051124] py-3.5 px-4 sm:px-6 rounded-xl font-poppins font-bold text-xs sm:text-sm md:text-[15px] flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Call Directly: +91 9263636474</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="bg-[#132845] hover:bg-[#1a3459] text-white border border-white/10 py-3.5 px-5 rounded-xl font-poppins font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-[#f5c518]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ================= 2. CHOOSE YOUR PREFERRED CHANNEL ================= */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#071A36]">
              Choose Your Preferred Contact Channel
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Connect via direct phone call, official document email, or explore our online services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <motion.div
                  key={ch.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-slate-200/90 hover:border-blue-300/80 shadow-[0_10px_30px_rgba(7,26,54,0.05)] hover:shadow-[0_20px_40px_rgba(7,26,54,0.1)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-[#071A36] text-[#071A36] group-hover:text-[#f5c518] flex items-center justify-center transition-colors duration-300 shadow-xs border border-slate-100">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {ch.badge}
                      </span>
                    </div>

                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                      {ch.title}
                    </h4>

                    {/* Value */}
                    <div className="mb-2.5 sm:mb-3">
                      <p className="text-base sm:text-lg md:text-[19px] font-extrabold text-[#071A36] font-poppins tracking-tight break-words">
                        {ch.value}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5 sm:mb-6">
                      {ch.description}
                    </p>
                  </div>

                  <a
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    className={`w-full py-3.5 px-5 rounded-xl font-poppins font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${ch.btnStyle}`}
                  >
                    <span>{ch.actionText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= 3. PRIORITY CONSULTATION BOOKING FORM ================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 lg:p-12 border border-slate-200/90 shadow-xl mb-14 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <span className="text-[#0b337c] font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              DIRECT ASSISTANCE
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extrabold text-[#071A36] tracking-tight">
              Request a Priority Callback
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
              Share your requirements below and Mahesh Kumar will personally connect with you.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm focus:outline-none focus:border-[#073693] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9263636474"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm focus:outline-none focus:border-[#073693] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm focus:outline-none focus:border-[#073693] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm focus:outline-none focus:border-[#073693] focus:bg-white transition-colors font-medium text-slate-700 cursor-pointer"
                    >
                      <option value="Business Loan">Business Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Loan Against Property">Loan Against Property (LAP)</option>
                      <option value="Working Capital">Working Capital (OD / CC)</option>
                      <option value="Equipment & Machinery Finance">Equipment & Machinery Finance</option>
                      <option value="Accounting & GST Services">Accounting & GST Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Requirement (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your loan requirement, business profile, or queries..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-base sm:text-sm focus:outline-none focus:border-[#073693] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-[#071A36] to-[#124294] text-white py-3.5 sm:py-4 rounded-xl font-poppins font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#f5c518]" />
                  <span>Submit Consultation Request</span>
                </button>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>100% Confidential. Zero spam. We never share your data.</span>
                </p>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-6"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#071A36] mb-2">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Your consultation request has been forwarded to Mahesh Kumar. You will receive a priority call on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#0b337c] font-bold hover:underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ================= 4. BOTTOM REASSURANCE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#071A36] via-[#0b2b63] to-[#124294] text-white rounded-3xl p-6 sm:p-9 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 text-center md:text-left relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-[#f5c518] font-bold text-xs uppercase tracking-widest block mb-2">
              WE ARE HERE TO HELP YOU SUCCEED
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-extrabold tracking-tight mb-2">
              Your financial goals deserve the right guidance.
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Connect directly with Mahesh Kumar to explore customized loan solutions and strategic accounting services.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919263636474"
              className="group cursor-pointer inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#f5c518] hover:bg-[#e5b712] text-[#051124] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-poppins font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Our Expert</span>
            </a>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default TalkToExpert;
