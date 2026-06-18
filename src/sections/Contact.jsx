import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMsg('Please complete all form inputs.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020202] overflow-hidden">
      {/* Spotlight Glows */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-awsOrange/5 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-electricBlue/5 rounded-full filter blur-[130px] pointer-events-none" />

      {/* Floating Success Notification Toast */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 glassmorphism-premium border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/10"
          >
            <CheckCircle2 className="text-green-500" size={24} />
            <div className="text-left">
              <h5 className="text-sm font-bold text-white uppercase tracking-wider">Message Delivered</h5>
              <p className="text-xs text-zinc-300">Thanks! I'll get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Connect
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Cinematic Title and details (Spans 5 Columns) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-8 uppercase text-neon-glow">
                Let's build <br />
                something <br />
                <span className="text-neon-glow-strong font-serif italic normal-case font-normal">meaningful</span>
              </h3>
              
              <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-10 font-light">
                Whether you're looking to hire a Full Stack Developer, discuss AWS architectures, or explore a project partnership, my channels are open.
              </p>
            </div>

            {/* Premium Social Cards */}
            <div className="flex flex-col gap-4 mt-auto">
              {/* Email */}
              <a
                href="mailto:ramaiahakaash51@gmail.com"
                className="flex items-center justify-between p-4 glassmorphism rounded-xl border border-white/5 hover:border-awsOrange/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-awsOrange/10 border border-awsOrange/15 flex items-center justify-center text-awsOrange group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">Email</span>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">ramaiahakaash51@gmail.com</span>
                  </div>
                </div>
                <Send size={14} className="text-slate-600 group-hover:text-awsOrange group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akaash-r-k-80411531a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glassmorphism rounded-xl border border-white/5 hover:border-electricBlue/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electricBlue/10 border border-electricBlue/15 flex items-center justify-center text-electricBlue group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">LinkedIn</span>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">linkedin.com/in/akaash-r-k-80411531a/</span>
                  </div>
                </div>
                <Send size={14} className="text-slate-600 group-hover:text-electricBlue group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/akaashbytes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glassmorphism rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-transform">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">GitHub</span>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">github.com/akaashbytes</span>
                  </div>
                </div>
                <Send size={14} className="text-slate-600 group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right: Glassmorphism Form Card (Spans 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glassmorphism-premium p-8 rounded-3xl border border-white/5 text-left relative overflow-hidden">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-awsOrange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-electricBlue/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="Brief description"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-awsOrange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-electricBlue/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-semibold">
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                 {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-black/80 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl border-neon-glow transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} className="text-[#FF1F1F]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
