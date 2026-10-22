import React, { useState, useEffect } from 'react';
import { Landmark, MapPin, Phone, Mail, Globe, X, ExternalLink, ArrowRight, ShieldCheck, FileText, AlertCircle, Briefcase, Map, Newspaper } from 'lucide-react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Facebook = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const Instagram = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const Linkedin = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const Twitter = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;

const Footer = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalType(null);
    };
    if (modalType) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType]);

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Services', target: 'services' },
    { name: 'Industries', target: 'industries' },
    { name: 'Partners', target: 'partners' },
    { name: 'Blog', action: () => window.dispatchEvent(new CustomEvent('open-blog-modal')) },
    { name: 'Contact Us', target: 'contact' },
  ];

  const serviceLinks = [
    { name: 'Loan Services', target: 'services' },
    { name: 'Accounting', target: 'services' },
    { name: 'Business Loans', target: 'services' },
    { name: 'Working Capital', target: 'services' },
  ];

  const usefulLinks = [
    { name: 'Privacy Policy', key: 'privacy' },
    { name: 'Terms & Conditions', key: 'terms' },
    { name: 'Disclaimer', key: 'disclaimer' },
    { name: 'Sitemap', key: 'sitemap' },
    { name: 'Careers', url: '/careers' },
  ];

  const sitemapSections = [
    { title: 'Home / Hero Banner', target: 'home' },
    { title: 'About CapitalLinks', target: 'about' },
    { title: 'Financial Solutions (Loans & Accounting)', target: 'services' },
    { title: 'Why Choose Capitallinks (Industries & Features)', target: 'industries' },
    { title: 'Our 6-Step Simple Process', target: 'process' },
    { title: 'Trusted Banking Partners', target: 'partners' },
    { title: 'Client Testimonials & Stories', target: 'testimonials' },
    { title: 'Interactive EMI Calculator & Goals', target: 'calculator' },
    { title: 'Careers & Job Application Form', url: '/careers' },
    { title: 'Contact Information & Consultation', target: 'contact' },
  ];

  return (
    <footer id="contact" className="bg-[#051124] text-slate-300 pt-16 pb-10 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-5 lg:pr-4">
            <div className="flex items-center mb-4">
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer bg-white px-3 py-2 rounded-lg shadow-sm inline-block hover:shadow-md transition-shadow"
              >
                <img src="/logo.png" alt="CapitalLinks Logo" className="h-10 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-[13px] font-normal leading-relaxed text-slate-300">
              Financial Products<br/>Distribution House
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051124] hover:bg-[#FACC15] hover:scale-110 transition-all duration-300">
                <Facebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051124] hover:bg-[#FACC15] hover:scale-110 transition-all duration-300">
                <Linkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051124] hover:bg-[#FACC15] hover:scale-110 transition-all duration-300">
                <Instagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051124] hover:bg-[#FACC15] hover:scale-110 transition-all duration-300">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-poppins font-bold text-[14px] mb-5 uppercase tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  {link.url ? (
                    <button
                      onClick={() => { navigate(link.url); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  ) : link.target ? (
                    <Link
                      to={link.target}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-poppins font-bold text-[14px] mb-5 uppercase tracking-wide">
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.target}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <h4 className="text-white font-poppins font-bold text-[14px] mb-5 uppercase tracking-wide">
              USEFUL LINKS
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  {link.url ? (
                    <button
                      onClick={() => { navigate(link.url); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => setModalType(link.key)}
                      className="cursor-pointer text-[#cbd5e1] hover:text-[#FACC15] transition-colors text-[13px] font-medium inline-block hover:translate-x-1 duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-white font-poppins font-bold text-[14px] mb-5 uppercase tracking-wide">
              CONTACT US
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <a 
                  href="tel:+919263636474" 
                  className="text-[13px] text-[#cbd5e1] hover:text-[#FACC15] transition-colors font-medium"
                >
                  +91 9263636474
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <a 
                  href="mailto:mahesh@capitallinks.in" 
                  className="text-[13px] text-[#cbd5e1] hover:text-[#FACC15] transition-colors font-medium"
                >
                  mahesh@capitallinks.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <a
                  href="https://www.capitallinks.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-[13px] text-[#cbd5e1] hover:text-[#FACC15] transition-colors font-medium"
                >
                  www.capitallinks.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FACC15] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=Jamshedpur,Jharkhand,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#cbd5e1] hover:text-[#FACC15] transition-colors font-medium leading-relaxed"
                >
                  Jamshedpur, Jharkhand, India
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-light">
            &copy; 2026 CapitalLinks. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 font-medium">
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-[#FACC15] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-[#FACC15] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Modal for Useful Links, Legal & Info */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalType(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1c36] text-white border border-white/15 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalType(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body */}
              {modalType === 'privacy' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-7 h-7 text-[#FACC15]" />
                    <h3 className="text-2xl font-poppins font-bold text-white">Privacy Policy</h3>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed space-y-4">
                    <p>At <strong>CapitalLinks</strong>, your privacy is of paramount importance to us. As a premier financial products distribution house, we are committed to safeguarding the personal and financial information you entrust to us.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">1. Information We Collect</h4>
                    <p>We collect necessary contact information (name, phone, email, city) and financial evaluation details strictly for assessing loan eligibility, insurance requirements, and investment planning.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">2. How We Use Your Data</h4>
                    <p>Your data is used solely to facilitate financial services with our verified banking and NBFC partners. We do not sell, rent, or lease your personal information to third-party marketing companies.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">3. Data Security & Storage</h4>
                    <p>All sensitive data is handled in compliance with applicable Indian data protection laws and industry standard encryption standards.</p>
                    <p className="text-xs text-slate-400 pt-2 border-t border-white/10">For privacy inquiries or data requests, contact us at <a href="mailto:privacy@capitallinks.in" className="text-[#FACC15] underline">privacy@capitallinks.in</a>.</p>
                  </div>
                </div>
              )}

              {modalType === 'terms' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-7 h-7 text-[#FACC15]" />
                    <h3 className="text-2xl font-poppins font-bold text-white">Terms & Conditions</h3>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed space-y-4">
                    <p>Welcome to <strong>CapitalLinks</strong>. By accessing our platform or using our financial advisory and distribution services, you agree to these Terms & Conditions.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">1. Scope of Services</h4>
                    <p>CapitalLinks operates as a financial product distribution house. We connect prospective borrowers, investors, and businesses with licensed banking partners and NBFCs.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">2. Advisory & Approval Disclaimer</h4>
                    <p>Loan approval, interest rates, tenure, and sanctions are decided solely by the respective bank or lending institution based on their underwriting criteria and RBI regulations.</p>
                    <h4 className="font-bold text-white text-[15px] pt-2">3. Accurate Information</h4>
                    <p>Clients are required to furnish accurate and genuine documentation. Submission of fraudulent records will result in immediate termination of assistance.</p>
                    <p className="text-xs text-slate-400 pt-2 border-t border-white/10">Subject to the jurisdiction of courts in Jamshedpur, Jharkhand, India.</p>
                  </div>
                </div>
              )}

              {modalType === 'disclaimer' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-7 h-7 text-[#FACC15]" />
                    <h3 className="text-2xl font-poppins font-bold text-white">Regulatory Disclaimer</h3>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed space-y-4">
                    <p className="bg-white/5 p-4 rounded-xl border border-white/10 text-slate-200">
                      <strong>Notice:</strong> CapitalLinks is an authorized Channel Partner and Corporate Financial Distribution House. We are not an NBFC or a bank, and we do not lend money directly.
                    </p>
                    <p>We work in formal partnership with over 25+ leading banks and RBI-registered NBFCs across India. All loans, insurances, mutual funds, and credit decisions are subject to the terms and discretion of the issuing financial entities.</p>
                    <p><strong>Warning:</strong> CapitalLinks never charges advance processing fees or cash commissions from individual borrowers. Beware of impersonators.</p>
                  </div>
                </div>
              )}

              {modalType === 'sitemap' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Map className="w-7 h-7 text-[#FACC15]" />
                    <h3 className="text-2xl font-poppins font-bold text-white">Website Sitemap</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-6">Click any section below to navigate directly to that part of the page:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sitemapSections.map((item, idx) => item.url ? (
                      <button
                        key={idx}
                        onClick={() => { setModalType(null); navigate(item.url); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="cursor-pointer bg-white/5 hover:bg-[#FACC15] hover:text-[#051124] transition-all p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-[13px] font-semibold group text-left"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        key={idx}
                        to={item.target}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setModalType(null)}
                        className="cursor-pointer bg-white/5 hover:bg-[#FACC15] hover:text-[#051124] transition-all p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-[13px] font-semibold group"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {modalType === 'careers' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-7 h-7 text-[#FACC15]" />
                    <h3 className="text-2xl font-poppins font-bold text-white">Careers at CapitalLinks</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-5">Join our fast-growing team of financial strategists and relationship managers across India!</p>
                  <div className="space-y-3.5 mb-6">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-white text-[15px]">Senior Loan Relationship Manager</h4>
                        <span className="text-xs bg-[#FACC15]/20 text-[#FACC15] px-2.5 py-0.5 rounded-full font-semibold">Full-Time</span>
                      </div>
                      <p className="text-xs text-slate-300">Mumbai / Pune / Ahmedabad &bull; 3-5 Years Exp in SME & Business Loans</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-white text-[15px]">Mutual Funds & Wealth Advisor</h4>
                        <span className="text-xs bg-[#FACC15]/20 text-[#FACC15] px-2.5 py-0.5 rounded-full font-semibold">Full-Time</span>
                      </div>
                      <p className="text-xs text-slate-300">Remote / Mumbai &bull; NISM Certified &bull; 2+ Years Exp</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-white text-[15px]">Corporate Finance Executive</h4>
                        <span className="text-xs bg-[#FACC15]/20 text-[#FACC15] px-2.5 py-0.5 rounded-full font-semibold">Full-Time</span>
                      </div>
                      <p className="text-xs text-slate-300">Mumbai &bull; CA Inter / MBA Finance &bull; 1-3 Years Exp</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-xs text-slate-400">Ready to make financial ideas happen?</span>
                    <a
                      href="mailto:careers@capitallinks.in?subject=Application%20for%20Career%20at%20CapitalLinks"
                      className="bg-[#FACC15] text-[#051124] px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-[#e6b800] transition-colors flex items-center gap-2"
                    >
                      Send CV / Resume <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}



            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
};

export default Footer;
