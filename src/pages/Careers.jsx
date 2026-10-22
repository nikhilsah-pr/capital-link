import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Phone, Mail, MapPin, Briefcase, IndianRupee, 
  UploadCloud, FileText, CheckCircle2, ArrowLeft, ArrowRight, 
  ShieldCheck, Award, TrendingUp, X, Lock, AlertCircle, Building2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    position: 'Relationship Executive',
    experience: 'Fresher',
    expectedSalary: '',
    noticePeriod: 'Immediate joining',
    resumeFile: null,
    confirmed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const experienceOptions = [
    'Fresher',
    'Less than 1 year',
    '1–3 years',
    '3–5 years',
    '5+ years'
  ];

  const noticePeriodOptions = [
    'Immediate joining',
    'Within 15 days',
    'Within 30 days',
    'More than 30 days'
  ];

  const positions = [
    'Relationship Executive',
    'Senior Loan Relationship Manager',
    'Mutual Funds & Wealth Advisor',
    'Corporate Finance Executive',
    'SME Loan Specialist',
    'Insurance Advisor'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setErrors(prev => ({ ...prev, resumeFile: 'Please upload a PDF or DOC/DOCX file only.' }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resumeFile: 'File size must be under 10 MB.' }));
        return;
      }
      setFormData(prev => ({ ...prev, resumeFile: file }));
      setErrors(prev => ({ ...prev, resumeFile: null }));
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, resumeFile: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.city.trim()) newErrors.city = 'Current City is required.';
    if (!formData.position) newErrors.position = 'Please select a position.';
    if (!formData.experience) newErrors.experience = 'Please select your work experience.';
    if (!formData.resumeFile) newErrors.resumeFile = 'Please upload your Resume / CV.';
    if (!formData.confirmed) newErrors.confirmed = 'You must confirm the declaration to proceed.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = document.querySelector('.form-error-anchor');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="bg-[#f8faff] min-h-screen text-slate-800 font-sans flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#051124] text-white pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40 text-xs font-poppins font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
              We Are Hiring &bull; Capital Links
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold text-white leading-tight mb-4 tracking-tight">
              Join Our <span className="text-[#FACC15]">Team</span>
            </h1>
            <p className="text-xl sm:text-2xl font-poppins font-medium text-white/95 mb-3">
              Make Your Financial Ideas Happen.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Take the next step in your career with us. Build impactful relationships and accelerate growth in India's leading financial distribution house.
            </p>
          </motion.div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10 text-left">
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <TrendingUp className="w-6 h-6 text-[#FACC15] shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Fast-Track</p>
                <p className="text-sm font-bold text-white">Career Growth</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <Award className="w-6 h-6 text-[#FACC15] shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Performance</p>
                <p className="text-sm font-bold text-white">Best Incentives</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <Building2 className="w-6 h-6 text-[#FACC15] shrink-0" />
              <div>
                <p className="text-xs text-slate-300">25+ Banking</p>
                <p className="text-sm font-bold text-white">Top Partners</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-6 h-6 text-[#FACC15] shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Collaborative</p>
                <p className="text-sm font-bold text-white">Positive Culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <main className="flex-grow container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-3xl">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-[0_12px_45px_rgba(7,26,54,0.08)] border border-slate-200/90 overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#071A36] to-[#0A254C] text-white px-6 sm:px-10 py-7">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-1.5 flex items-center gap-3">
                  <Briefcase className="w-7 h-7 text-[#FACC15]" />
                  Job Application Form
                </h2>
                <p className="text-sm text-slate-300">
                  Fields marked with an asterisk (<span className="text-[#FACC15] font-bold">*</span>) are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10" noValidate>
                
                {/* 1. PERSONAL INFORMATION */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-[#073693] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <h3 className="text-lg font-poppins font-bold text-[#071A36] uppercase tracking-wide">
                      Personal Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full bg-slate-50 border ${errors.fullName ? 'border-red-400 ring-1 ring-red-400 form-error-anchor' : 'border-slate-300'} rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all`}
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="text-xs font-bold text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          maxLength={10}
                          className={`w-full bg-slate-50 border ${errors.mobile ? 'border-red-400 ring-1 ring-red-400 form-error-anchor' : 'border-slate-300'} rounded-lg py-2.5 pl-16 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all`}
                        />
                      </div>
                      {errors.mobile && <p className="text-xs text-red-500 font-medium">{errors.mobile}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rahul.sharma@example.com"
                          className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400 ring-1 ring-red-400 form-error-anchor' : 'border-slate-300'} rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                    </div>

                    {/* Current City */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Current City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="e.g. Mumbai, Pune, Delhi NCR"
                          className={`w-full bg-slate-50 border ${errors.city ? 'border-red-400 ring-1 ring-red-400 form-error-anchor' : 'border-slate-300'} rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all`}
                        />
                      </div>
                      {errors.city && <p className="text-xs text-red-500 font-medium">{errors.city}</p>}
                    </div>
                  </div>
                </div>

                {/* 2. CAREER DETAILS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-[#073693] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <h3 className="text-lg font-poppins font-bold text-[#071A36] uppercase tracking-wide">
                      Career Details
                    </h3>
                  </div>

                  {/* Position Applying For */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Position Applying For <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-sm font-semibold text-[#071A36] focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all appearance-none cursor-pointer"
                      >
                        {positions.map((pos) => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                      <Briefcase className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Work Experience <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                      {experienceOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`cursor-pointer border rounded-lg p-3 text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            formData.experience === opt
                              ? 'bg-[#073693] text-white border-[#073693] shadow-md'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="experience"
                            value={opt}
                            checked={formData.experience === opt}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-xs font-bold leading-tight">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.experience && <p className="text-xs text-red-500 font-medium">{errors.experience}</p>}
                  </div>

                  {/* Expected Monthly Salary & Notice Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                    {/* Expected Monthly Salary */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Expected Monthly Salary (₹)
                      </label>
                      <div className="relative">
                        <span className="text-sm font-bold text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">₹</span>
                        <input
                          type="text"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleInputChange}
                          placeholder="e.g. 35,000"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 pl-9 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all"
                        />
                      </div>
                      <span className="text-[11px] text-slate-400">Optional / Negotiable</span>
                    </div>

                    {/* Notice Period / Availability */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Notice Period / Availability
                      </label>
                      <div className="relative">
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-sm font-semibold text-[#071A36] focus:bg-white focus:outline-none focus:border-[#073693] focus:ring-1 focus:ring-[#073693] transition-all appearance-none cursor-pointer"
                        >
                          {noticePeriodOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ArrowRight className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. RESUME & DECLARATION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-[#073693] text-white text-xs font-bold flex items-center justify-center">3</span>
                    <h3 className="text-lg font-poppins font-bold text-[#071A36] uppercase tracking-wide">
                      Resume & Declaration
                    </h3>
                  </div>

                  {/* Resume Upload Box */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Resume / CV <span className="text-red-500">*</span>
                    </label>

                    {!formData.resumeFile ? (
                      <label 
                        className={`border-2 border-dashed rounded-xl p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
                          errors.resumeFile 
                            ? 'border-red-400 bg-red-50/30' 
                            : 'border-slate-300 bg-slate-50 hover:bg-blue-50/30 hover:border-[#073693]'
                        }`}
                      >
                        <UploadCloud className="w-10 h-10 text-[#073693] mb-3 animate-bounce" />
                        <p className="text-sm font-semibold text-[#071A36] text-center mb-1">
                          Click to upload or drag and drop your Resume
                        </p>
                        <p className="text-xs text-slate-400 text-center">
                          Accepts PDF, DOC or DOCX (Max 10 MB)
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                    ) : (
                      <div className="border border-green-200 bg-green-50/50 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-sm font-bold text-slate-800 truncate max-w-xs sm:max-w-md">
                              {formData.resumeFile.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {(formData.resumeFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Ready to submit
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-white transition-colors"
                          title="Remove file"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                    {errors.resumeFile && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.resumeFile}
                      </p>
                    )}
                  </div>

                  {/* Declaration Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="confirmed"
                        checked={formData.confirmed}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#073693] focus:ring-[#073693] cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-800">
                        I confirm that the information provided is accurate and consent to its use for recruitment purposes. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.confirmed && <p className="text-xs text-red-500 font-medium mt-1 pl-7">{errors.confirmed}</p>}
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-4 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#073693] hover:bg-[#05286e] text-white py-3.5 px-6 rounded-xl font-poppins font-bold text-sm tracking-wide shadow-lg shadow-[#073693]/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your information should be handled securely and used only for recruitment purposes.</span>
                    </p>
                  </div>

                </div>

              </form>
            </motion.div>
          ) : (
            /* Success Card */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Application Received
                </span>
                <h2 className="text-3xl font-poppins font-extrabold text-[#071A36]">
                  Thank You, {formData.fullName}!
                </h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your application for the position of <strong className="text-[#071A36]">{formData.position}</strong> has been successfully submitted to CapitalLinks HR team.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <p><strong>Applicant Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Mobile:</strong> +91 {formData.mobile}</p>
                <p><strong>Experience:</strong> {formData.experience}</p>
                <p><strong>Notice Period:</strong> {formData.noticePeriod}</p>
                {formData.resumeFile && (
                  <p><strong>Resume Uploaded:</strong> {formData.resumeFile.name}</p>
                )}
              </div>

              <p className="text-xs text-slate-500">
                Our recruitment specialists will review your profile and reach out via phone or email within 2–3 business days.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      mobile: '',
                      email: '',
                      city: '',
                      position: 'Relationship Executive',
                      experience: 'Fresher',
                      expectedSalary: '',
                      noticePeriod: 'Immediate joining',
                      resumeFile: null,
                      confirmed: false
                    });
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
                <RouterLink
                  to="/"
                  className="bg-[#073693] hover:bg-[#05286e] text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Return to Homepage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </RouterLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
