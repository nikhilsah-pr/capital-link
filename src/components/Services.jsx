import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  User, 
  Home, 
  Building2, 
  Coins, 
  CreditCard, 
  Factory, 
  Cpu, 
  Calculator, 
  FileText, 
  Receipt, 
  Users, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-scroll';

const Services = () => {
  const [activeTab, setActiveTab] = useState('loans');

  useEffect(() => {
    const handleSwitchTab = (e) => {
      if (e.detail) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('switch-service-tab', handleSwitchTab);
    return () => window.removeEventListener('switch-service-tab', handleSwitchTab);
  }, []);

  const loanServices = [
    {
      id: 'business-loan',
      title: 'Business Loan',
      desc: 'Funding to support business growth, expansion, and everyday operations.',
      icon: Briefcase,
      badge: 'Popular'
    },
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      desc: 'Financing for planned expenses and personal financial requirements.',
      icon: User
    },
    {
      id: 'home-loan',
      title: 'Home Loan',
      desc: 'Financial support to help you purchase or build your dream home.',
      icon: Home
    },
    {
      id: 'loan-against-property',
      title: 'Loan Against Property',
      desc: 'Explore financing options using eligible property as collateral.',
      icon: Building2
    },
    {
      id: 'working-capital',
      title: 'Working Capital',
      desc: 'Support for cash flow, inventory, and day-to-day business expenses.',
      icon: Coins
    },
    {
      id: 'od-cc',
      title: 'OD & CC Facilities',
      desc: 'Explore overdraft and cash credit facilities for business liquidity needs.',
      icon: CreditCard
    },
    {
      id: 'project-finance',
      title: 'Project Finance',
      desc: 'Financing options for eligible new projects, infrastructure, and business development.',
      icon: Factory
    },
    {
      id: 'equipment-finance',
      title: 'Equipment Finance',
      desc: 'Funding options for machinery, equipment, and essential business assets.',
      icon: Cpu
    }
  ];

  const accountingServices = [
    {
      id: 'gst-filing',
      title: 'GST Filing',
      desc: 'Timely and accurate GST return filing, reconciliations, and audit compliance.',
      icon: Receipt,
      badge: 'Essential'
    },
    {
      id: 'income-tax',
      title: 'Income Tax',
      desc: 'Expert income tax assessment, return filing, and strategic tax planning for individuals & businesses.',
      icon: Calculator
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      desc: 'Systematic ledger maintenance, daily accounting entries, and profit & loss reporting.',
      icon: FileText
    },
    {
      id: 'payroll',
      title: 'Payroll Management',
      desc: 'Streamlined salary processing, employee deductions, and statutory compliance management.',
      icon: Users
    },
    {
      id: 'roc-compliance',
      title: 'ROC Compliance',
      desc: 'Annual company filings, MCA compliance, director KYC, and secretarial documentation.',
      icon: ShieldCheck
    },
    {
      id: 'business-registration',
      title: 'Business Registration',
      desc: 'Seamless incorporation for Pvt Ltd, LLP, Partnership, and MSME registrations.',
      icon: Building2
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Interactive Tabs Header */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200/90 shadow-sm">
            <button
              onClick={() => setActiveTab('loans')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full font-poppins font-semibold text-[14px] transition-all duration-300 cursor-pointer ${
                activeTab === 'loans'
                  ? 'bg-gradient-to-r from-[#071A36] to-[#124294] text-white shadow-md shadow-blue-900/25'
                  : 'text-slate-600 hover:text-[#071A36] hover:bg-slate-100/60'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'loans' ? 'text-[#FACC15]' : 'text-slate-400'}`} />
              <span>Loan Services</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeTab === 'loans' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                8
              </span>
            </button>

            <button
              onClick={() => setActiveTab('accounting')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full font-poppins font-semibold text-[14px] transition-all duration-300 cursor-pointer ${
                activeTab === 'accounting'
                  ? 'bg-gradient-to-r from-[#006e3d] to-[#009b55] text-white shadow-md shadow-emerald-900/25'
                  : 'text-slate-600 hover:text-[#071A36] hover:bg-slate-100/60'
              }`}
            >
              <Calculator className={`w-4 h-4 ${activeTab === 'accounting' ? 'text-emerald-300' : 'text-slate-400'}`} />
              <span>Accounting</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeTab === 'accounting' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                6
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'loans' ? (
            <motion.div
              key="loans-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
                  <span className="text-xs md:text-sm font-poppins font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                    OUR LOAN SERVICES
                  </span>
                  <div className="h-[2px] w-10 md:w-14 bg-[#D4AF37]"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-poppins font-extrabold text-[#071A36] tracking-tight leading-tight mb-4">
                  The Right Financing for <span className="text-[#1864d8]">Your Next Step</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
                  Explore flexible financing solutions for personal needs, business expansion, property ownership, and long-term growth.
                </p>
              </div>

              {/* 8 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {loanServices.map((service, index) => {
                  const IconComp = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="group relative bg-white rounded-[20px] p-6 border border-slate-200/90 hover:border-[#1864d8]/40 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[#eef5ff] group-hover:bg-[#1864d8] text-[#1864d8] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                            <IconComp className="w-6 h-6 stroke-[1.8]" />
                          </div>
                          {service.badge && (
                            <span className="bg-[#FACC15]/20 text-[#854d0e] text-[11px] font-poppins font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-[17px] font-poppins font-bold text-[#071A36] group-hover:text-[#1864d8] transition-colors leading-snug mb-2">
                          {service.title}
                        </h3>

                        <p className="text-slate-600 text-[13.5px] leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to="contact"
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#1864d8] group-hover:text-[#071A36] transition-colors"
                        >
                          <span>Inquire Now</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Looking for the Right Loan? CTA Banner */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 max-w-7xl mx-auto bg-gradient-to-r from-[#071A36] via-[#0b2b63] to-[#124294] rounded-[24px] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="text-center md:text-left relative z-10">
                  <span className="text-[#FACC15] font-poppins font-bold text-xs uppercase tracking-widest mb-1.5 block">
                    EASY & HASSLE-FREE PROCESS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold tracking-tight mb-2">
                    Looking for the Right Loan?
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                    Let us help you explore financing options suited to your needs.
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group cursor-pointer inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#e6b800] text-[#051124] px-8 py-3.5 rounded-full font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <span>Explore Loan Options</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="accounting-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-[2px] w-10 md:w-14 bg-[#009b55]"></div>
                  <span className="text-xs md:text-sm font-poppins font-bold text-[#009b55] uppercase tracking-[0.25em]">
                    OUR ACCOUNTING SERVICES
                  </span>
                  <div className="h-[2px] w-10 md:w-14 bg-[#009b55]"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-poppins font-extrabold text-[#071A36] tracking-tight leading-tight mb-4">
                  Precision Financial & <span className="text-[#009b55]">Compliance Solutions</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
                  End-to-end accounting, taxation, and regulatory services to keep your business fully compliant and financially sound.
                </p>
              </div>

              {/* 6 Accounting Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {accountingServices.map((service, index) => {
                  const IconComp = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="group relative bg-white rounded-[20px] p-6 border border-slate-200/90 hover:border-emerald-500/40 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[#ebf9f2] group-hover:bg-[#009b55] text-[#009b55] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                            <IconComp className="w-6 h-6 stroke-[1.8]" />
                          </div>
                          {service.badge && (
                            <span className="bg-emerald-50 text-emerald-700 text-[11px] font-poppins font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-[17px] font-poppins font-bold text-[#071A36] group-hover:text-[#009b55] transition-colors leading-snug mb-2">
                          {service.title}
                        </h3>

                        <p className="text-slate-600 text-[13.5px] leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to="contact"
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#009b55] group-hover:text-[#071A36] transition-colors"
                        >
                          <span>Consult Expert</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Accounting CTA Banner */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 max-w-6xl mx-auto bg-gradient-to-r from-[#05291b] via-[#084830] to-[#0b6b47] rounded-[24px] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="text-center md:text-left relative z-10">
                  <span className="text-emerald-300 font-poppins font-bold text-xs uppercase tracking-widest mb-1.5 block">
                    CERTIFIED FINANCIAL & TAX CONSULTANTS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold tracking-tight mb-2">
                    Need Expert Accounting & Tax Assistance?
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                    Let our certified accounting professionals handle your compliances so you can focus on growing your business.
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group cursor-pointer inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#071A36] px-8 py-3.5 rounded-full font-poppins font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <span>Consult Tax Expert</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform text-[#009b55]" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;
