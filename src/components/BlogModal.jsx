import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  PhoneCall, 
  TrendingUp, 
  Building2, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  Filter,
  Share2,
  Check
} from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const BlogModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedArticle) {
          setSelectedArticle(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setSelectedArticle(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedArticle, onClose]);

  const articles = [
    {
      id: "business-loan-guide",
      category: "Business Loans",
      categoryKey: "loan-guides",
      readTime: "5 min read",
      date: "Oct 2026",
      title: "Business Loan Guide: Everything You Need to Know Before Applying",
      description: "Understand eligibility, essential documents, interest rates, repayment terms, and how to prepare a strong loan application.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      featured: true,
      source: "CapitalLinks Advisory",
      keyPoints: [
        "Eligibility Criteria: Minimum 2-3 years in business, audited financials, and positive DSCR (Debt Service Coverage Ratio).",
        "Essential Documents: 2 years ITR with computation, last 12 months bank statements, GST returns, and KYC documents.",
        "Interest Rates & Fees: Comparing floating vs fixed interest rates and processing fee structures across 25+ banking partners.",
        "Preparation Tip: Consolidate short-term liabilities and ensure no GST tax filing lapses before loan appraisal."
      ]
    },
    {
      id: "working-capital-explained",
      category: "BUSINESS FINANCE",
      categoryKey: "business-finance",
      readTime: "4 min read",
      date: "Oct 2026",
      title: "Working Capital Explained: How to Manage Business Cash Flow",
      description: "Learn how working capital helps manage daily operations and short-term business expenses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      featured: false,
      source: "CapitalLinks Advisory",
      keyPoints: [
        "Core Concept: Working Capital = Current Assets minus Current Liabilities.",
        "Cash Conversion Cycle: Accelerate receivables collection and negotiate optimal supplier payables.",
        "OD & CC Facilities: Flexible credit buffers designed to prevent payroll and operational bottlenecks.",
        "Strategic Buffer: Maintain a 60-90 day operating cash reserve for supply chain resilience."
      ]
    },
    {
      id: "home-loan-checklist",
      category: "HOME LOANS",
      categoryKey: "loan-guides",
      readTime: "4 min read",
      date: "Oct 2026",
      title: "Home Loan Checklist: Documents to Prepare Before Applying",
      description: "Explore common income, identity, address, and property documents required by lenders.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      featured: false,
      source: "CapitalLinks Advisory",
      keyPoints: [
        "Income Proof: Form 16, last 3 months salary slips for salaried; 3 years ITR & balance sheets for self-employed.",
        "Property Documentation: Title deed chain (13-30 years), approved municipal building plan, and NOC from builder/society.",
        "Identity & KYC: Aadhaar card, PAN card, and updated proof of residence.",
        "Legal & Technical Evaluation: Understanding bank valuation and clear encumbrance certificate (EC)."
      ]
    },
    {
      id: "gst-compliance-basics",
      category: "ACCOUNTING & TAX",
      categoryKey: "accounting-tax",
      readTime: "5 min read",
      date: "Oct 2026",
      title: "GST Compliance Basics Every Small Business Should Understand",
      description: "A beginner-friendly overview of GST records, filing responsibilities, and compliance planning.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      featured: false,
      source: "CapitalLinks Advisory",
      keyPoints: [
        "Filing Timeline: Regular GSTR-1 (outward supplies) and GSTR-3B (summary & tax liability) submissions.",
        "Input Tax Credit (ITC): Matching vendor invoices with GSTR-2B to maximize legitimate tax credits.",
        "Record Keeping: Maintaining clear digital ledgers, tax invoices, and e-way bills for a minimum of 6 years.",
        "Penalty Avoidance: Timely reconciliations prevent interest penalties and blocked credit ledgers."
      ]
    },
    {
      id: "credit-score-loan-eligibility",
      category: "CREDIT AWARENESS",
      categoryKey: "loan-guides",
      readTime: "4 min read",
      date: "Oct 2026",
      title: "Credit Score and Loan Eligibility: What Borrowers Should Know",
      description: "Understand how credit history, repayment behaviour, income, and existing debt can affect lender decisions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      featured: false,
      source: "CapitalLinks Advisory",
      keyPoints: [
        "CIBIL Benchmark: Scores above 750 unlock preferred interest rates and faster sanction turnaround times.",
        "Repayment History: Even minor payment defaults or settled accounts negatively impact score health.",
        "Credit Utilization Ratio: Keep credit card and overdraft utilization below 30% of total limits.",
        "Debt-to-Income (FOIR): Lenders prefer fixed monthly obligations below 40-50% of gross monthly earnings."
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Insights' },
    { id: 'loan-guides', label: 'Loan Guides' },
    { id: 'business-finance', label: 'Business Finance' },
    { id: 'accounting-tax', label: 'Accounting & Tax' }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.categoryKey === activeCategory);

  const topics = [
    {
      title: "Loans & Credit",
      description: "Business loans, personal loans, home loans, LAP, and credit awareness.",
      categoryKey: "loan-guides",
      badge: "Financing",
      icon: Building2
    },
    {
      title: "Business Growth",
      description: "Cash flow, working capital, project finance, and expansion planning.",
      categoryKey: "business-finance",
      badge: "Strategy",
      icon: TrendingUp
    },
    {
      title: "Accounting & Compliance",
      description: "GST, income tax, bookkeeping, payroll, and business registration.",
      categoryKey: "accounting-tax",
      badge: "Taxation",
      icon: FileText
    }
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '/blog');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleConsultExpert = () => {
    onClose();
    navigate('/talk-to-expert');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#051124]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-white w-full max-w-5xl max-h-[92vh] rounded-[28px] shadow-[0_25px_70px_rgba(5,17,36,0.4)] border border-slate-200/80 flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="bg-[#051124] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15] text-[#051124] flex items-center justify-center font-bold shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[#FACC15] text-[11px] font-bold tracking-widest uppercase block">
                  CAPITALLINKS INSIGHTS
                </span>
                <h2 className="text-base sm:text-lg font-poppins font-extrabold tracking-tight text-white leading-tight">
                  Knowledge & Financial Guides
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                aria-label="Share Insights"
                title="Copy Link"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 space-y-10 custom-scrollbar">

            {/* If An Article is Selected (Detail Reader Mode) */}
            {selectedArticle ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#073693] hover:text-[#051124] bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to All Articles
                  </button>

                  <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                    Published by {selectedArticle.source}
                  </span>
                </div>

                <div className="relative rounded-3xl overflow-hidden h-60 sm:h-80 w-full shadow-lg">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-[#FACC15] text-[#051124] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-3 inline-block">
                      {selectedArticle.category}
                    </span>
                    <h1 className="text-xl sm:text-3xl font-poppins font-black leading-tight text-white">
                      {selectedArticle.title}
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}</span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p className="font-semibold text-slate-900 text-base sm:text-lg">
                    {selectedArticle.description}
                  </p>
                  <p>
                    Navigating complex institutional guidelines requires clear visibility into lender benchmarks, regulatory norms, and optimal financial structuring. Whether planning capital expenditure, optimizing short-term cash liquidity, or securing long-term property assets, strategic preparation significantly improves sanction outcomes.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 my-6">
                    <h3 className="font-poppins font-bold text-[#051124] text-base mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FACC15]" /> Key Insights & Application Checklist
                    </h3>
                    <div className="space-y-3">
                      {selectedArticle.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    Through direct connections with India's leading banks and RBI-registered NBFCs, Capitallinks assists clients with profile evaluation, rate comparison, and swift file processing.
                  </p>
                </div>

                {/* In-Article Advisor Callout */}
                <div className="bg-gradient-to-r from-[#071A36] to-[#0c2f66] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <h4 className="font-bold text-white text-base">Have specific questions on this topic?</h4>
                    <p className="text-xs text-slate-300">Speak directly with Mahesh Kumar for personalized consultation.</p>
                  </div>
                  <button
                    onClick={handleConsultExpert}
                    className="cursor-pointer bg-[#FACC15] hover:bg-[#e6b800] text-[#051124] px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center gap-2 shrink-0 transition-all duration-300"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to Expert</span>
                  </button>
                </div>
              </div>
            ) : (
              /* All Articles Overview Mode */
              <>
                {/* 1. Modal Hero Header */}
                <div className="bg-gradient-to-br from-[#071A36] via-[#092247] to-[#0c2f66] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-lg border border-white/10">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 bg-[#FACC15]/20 text-[#FACC15] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#FACC15]/30">
                      <Sparkles className="w-3 h-3" /> CAPITALLINKS INSIGHTS
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-poppins font-black text-white tracking-tight mb-3">
                      Smarter Financial Decisions <span className="text-[#FACC15]">Start Here.</span>
                    </h1>

                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      Explore practical guides, expert insights, and financial tips to help you make informed decisions about loans, business growth, and accounting.
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/10">
                    <span className="text-xs text-slate-400 font-semibold mr-2 flex items-center gap-1">
                      <Filter className="w-3.5 h-3.5" /> Topic Filter:
                    </span>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`text-xs px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                          activeCategory === cat.id 
                            ? 'bg-[#FACC15] text-[#051124] shadow-md font-bold' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Section: Latest Articles & Insights */}
                <div>
                  <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-poppins font-extrabold text-[#051124] tracking-tight">
                        Latest Articles & Insights
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                        Knowledge to help you move forward.
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-[#073693] flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>CapitalLinks Advisory</span>
                    </div>
                  </div>

                  {/* Featured Article Card (Business Loan Guide) */}
                  {filteredArticles.length > 0 && (
                    <div className="mb-6">
                      {filteredArticles.filter(a => a.featured).map((article) => (
                        <motion.div
                          key={article.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group grid grid-cols-1 md:grid-cols-12 cursor-pointer"
                          onClick={() => setSelectedArticle(article)}
                        >
                          {/* Image half */}
                          <div className="md:col-span-6 relative h-60 md:h-auto overflow-hidden">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-[#051124]/90 backdrop-blur-md text-[#FACC15] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                                {article.category}
                              </span>
                            </div>
                          </div>

                          {/* Content half */}
                          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                                <span>&bull;</span>
                                <span className="text-[#073693] font-semibold">Featured Guide</span>
                              </div>

                              <h4 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#051124] group-hover:text-[#073693] transition-colors leading-snug mb-3">
                                {article.title}
                              </h4>

                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                                {article.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                              <button 
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073693] group-hover:text-[#051124] transition-colors"
                              >
                                <span>Read Article</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                              <span className="text-[11px] font-medium text-slate-400">CapitalLinks Research</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Grid for Other Articles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredArticles.filter(a => !a.featured).map((article) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setSelectedArticle(article)}
                        className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
                      >
                        <div>
                          {/* Image */}
                          <div className="relative h-40 overflow-hidden">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#051124]/85 backdrop-blur-sm text-[#FACC15] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                                {article.category}
                              </span>
                            </div>
                          </div>

                          {/* Body */}
                          <div className="p-5">
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime}</span>
                            </div>

                            <h4 className="text-sm font-poppins font-bold text-[#051124] group-hover:text-[#073693] transition-colors leading-snug mb-2 line-clamp-2">
                              {article.title}
                            </h4>

                            <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                              {article.description}
                            </p>
                          </div>
                        </div>

                        {/* Footer Read More Button */}
                        <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#073693] group-hover:text-[#051124] flex items-center gap-1 transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3. Section: What Would You Like to Learn About? */}
                <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90">
                  <div className="max-w-2xl mb-6">
                    <span className="text-[#073693] text-xs font-bold uppercase tracking-widest block mb-1">
                      TOPIC DIRECTORY
                    </span>
                    <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#051124]">
                      What Would You Like to Learn About?
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Explore articles by financial topic.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {topics.map((topic, idx) => {
                      const Icon = topic.icon;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setActiveCategory(topic.categoryKey);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#073693] transition-all shadow-sm hover:shadow-md cursor-pointer group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#073693] text-[#073693] group-hover:text-[#FACC15] flex items-center justify-center transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full">
                                {topic.badge}
                              </span>
                            </div>

                            <h4 className="font-poppins font-bold text-base text-[#051124] group-hover:text-[#073693] transition-colors mb-2">
                              {topic.title}
                            </h4>

                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {topic.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#073693]">
                            <span>Explore Category</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Section: Have a Financial Question? */}
                <div className="bg-gradient-to-r from-[#051124] via-[#071A36] to-[#0A2540] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 text-center md:text-left">
                  <div>
                    <span className="text-[#FACC15] text-[11px] font-bold uppercase tracking-widest block mb-1">
                      EXPERT ASSISTANCE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-poppins font-black text-white">
                      Have a Financial Question?
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                      Our team can help you explore suitable financial services for your needs.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <button
                      onClick={handleConsultExpert}
                      className="cursor-pointer bg-[#FACC15] hover:bg-[#e6b800] text-[#051124] px-6 py-3 rounded-xl font-poppins font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Talk to an Expert</span>
                    </button>
                    <a
                      href="tel:+919263636474"
                      className="cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/15 px-5 py-3 rounded-xl font-poppins font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Call 9263636474</span>
                    </a>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Modal Footer Controls */}
          <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <span>&copy; {new Date().getFullYear()} Capital Links Financial Insights</span>
            <button
              onClick={onClose}
              className="font-bold text-[#073693] hover:text-[#051124] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogModal;
