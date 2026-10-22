import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Link } from 'react-scroll';

const CTA = () => {
  const [amount, setAmount] = useState(1000000); // 10 Lakhs
  const [rate, setRate] = useState(10.5); // 10.5%
  const [tenure, setTenure] = useState(5); // 5 Years
  const [showResult, setShowResult] = useState(false);

  // EMI Calculation
  const r = rate / 12 / 100;
  const n = tenure * 12;
  const emi = amount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  const totalAmount = emi * n;
  const totalInterest = totalAmount - amount;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-[20px] overflow-hidden bg-[#071A36] flex flex-col md:flex-row items-center min-h-[300px] shadow-2xl p-6 md:p-0">
          
          {/* Left Content */}
          <div className="relative z-10 w-full md:w-[50%] lg:w-[55%] md:p-8 lg:pl-10 text-left mb-6 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[24px] md:text-2xl lg:text-[30px] font-poppins font-bold text-white mb-3 leading-[1.3]"
            >
              Ready to Achieve Your Financial Goals?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[13px] md:text-[14px] text-white/90 font-normal leading-[1.6] mb-6 max-w-md"
            >
              Whether you need Loan Services or Professional Accounting, our experts are here to help you at every step.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="cursor-pointer flex items-center justify-center bg-[#FACC15] text-[#051124] px-6 py-2.5 rounded-md font-poppins font-bold text-[12px] hover:bg-[#e6b800] transition-colors duration-300 tracking-wide"
              >
                APPLY NOW
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="cursor-pointer flex items-center justify-center bg-transparent border border-[#FACC15] text-white px-6 py-2.5 rounded-md font-poppins font-bold text-[12px] hover:bg-white/5 transition-colors duration-300 tracking-wide"
              >
                CONTACT US
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* EMI Calculator on Right */}
          <div className="relative z-10 w-full md:w-[50%] lg:w-[45%] md:pr-8 lg:pr-10 md:py-6">
            <div className="bg-[#f8faff] rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#073693] p-1.5 rounded-md">
                  <Calculator className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-poppins font-bold text-[#071A36] tracking-wide">
                  EMI CALCULATOR
                </h3>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Loan Amount */}
                <div className="flex items-center justify-between">
                  <label className="text-[#071A36] text-[13px] font-semibold w-[40%]">Loan Amount</label>
                  <div className="relative w-[60%]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#071A36] font-medium text-[13px]">₹</span>
                    <input 
                      type="text" 
                      value={amount.toLocaleString('en-IN')} 
                      onChange={(e) => { setAmount(Number(e.target.value.replace(/[^0-9]/g, ''))); setShowResult(false); }}
                      className="w-full bg-white border border-slate-200 rounded-md py-1.5 pl-7 pr-3 text-[13px] text-[#071A36] font-semibold focus:outline-none focus:border-[#073693] shadow-sm"
                    />
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="flex items-center justify-between">
                  <label className="text-[#071A36] text-[13px] font-semibold w-[40%]">Interest Rate (% p.a.)</label>
                  <div className="w-[60%]">
                    <input 
                      type="text" 
                      value={rate} 
                      onChange={(e) => { setRate(e.target.value.replace(/[^0-9.]/g, '')); setShowResult(false); }}
                      className="w-full bg-white border border-slate-200 rounded-md py-1.5 px-3 text-[13px] text-[#071A36] font-semibold focus:outline-none focus:border-[#073693] shadow-sm"
                    />
                  </div>
                </div>

                {/* Tenure */}
                <div className="flex items-center justify-between">
                  <label className="text-[#071A36] text-[13px] font-semibold w-[40%]">Loan Tenure</label>
                  <div className="w-[60%] relative">
                    <select 
                      value={tenure}
                      onChange={(e) => { setTenure(Number(e.target.value)); setShowResult(false); }}
                      className="w-full bg-white border border-slate-200 rounded-md py-1.5 px-3 text-[13px] text-[#071A36] font-semibold appearance-none focus:outline-none focus:border-[#073693] shadow-sm"
                    >
                      {[1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map(y => (
                        <option key={y} value={y}>{y} Years</option>
                      ))}
                    </select>
                    <svg className="w-4 h-4 text-[#071A36] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Results & CTA */}
              <div className="mt-6 bg-[#e6f0fa] rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left space-y-3">
                  <div>
                    <p className="text-[#071A36] text-[12px] font-bold mb-0.5">Your EMI will be</p>
                    <p className="text-[19px] font-bold text-[#073693] leading-tight">
                      {showResult ? formatCurrency(emi) : '₹ --'} /-
                    </p>
                  </div>
                  <div>
                    <p className="text-[#071A36] text-[12px] font-bold mb-0.5">Total Amount to Pay</p>
                    <p className="text-[17px] font-bold text-[#073693] leading-tight">
                      {showResult ? formatCurrency(totalAmount) : '₹ --'} /-
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowResult(true)}
                  className="bg-[#073693] text-white px-5 py-3 rounded-md font-poppins font-bold text-[12px] hover:bg-[#071A36] transition-colors duration-300 shadow-md whitespace-nowrap h-fit"
                >
                  CALCULATE EMI
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
