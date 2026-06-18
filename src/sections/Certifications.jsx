import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

const certsList = [
  {
    title: 'IBM Machine Learning with Python',
    issuer: 'IBM',
    type: 'Data Science & ML',
    date: 'Credential Verified',
    pdf: '/Machine_Learning_IBM.pdf',
  },
  {
    title: 'CCNA Enterprise Networking Security and Automation',
    issuer: 'Cisco Systems',
    type: 'Infrastructure & Security',
    date: 'Credential Verified',
    pdf: '/CCNA_Security.pdf',
  },
  {
    title: 'CCNA Switching Routing and Wireless Essentials',
    issuer: 'Cisco Systems',
    type: 'Networks & Protocols',
    date: 'Credential Verified',
    pdf: '/CCNA_Routing.pdf',
  },
  {
    title: 'TATA Gen AI',
    issuer: 'Tata Consultancy Services',
    type: 'Artificial Intelligence',
    date: 'Credential Verified',
    pdf: '/Tata_Gen_AI.pdf',
  },
  {
    title: 'Cambridge University Certification',
    issuer: 'Cambridge Assessment',
    type: 'Technical English & Logic',
    date: 'Credential Verified',
    pdf: '/Linguaskill_Cambridge.pdf',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 bg-[#020202] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-awsOrange/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-electricBlue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Certifications Wall
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: AWS Certified Cloud Practitioner Flagship Card (Spans 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="lg:col-span-5 flex flex-col justify-between relative group"
          >
            {/* Glowing Orange Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-awsOrange/10 to-transparent rounded-3xl filter blur-xl group-hover:from-awsOrange/25 transition-all duration-500" />
            
            {/* Main Luxury Certificate Card */}
            <div className="relative h-full glassmorphism-premium p-8 rounded-3xl border border-awsOrange/35 shadow-[0_0_30px_rgba(255,153,0,0.1)] flex flex-col justify-between transition-all duration-500 hover:border-awsOrange/70 overflow-hidden">
              
              {/* Highlight Sweep Animation */}
              <div className="absolute -inset-y-12 -inset-x-0 bg-gradient-to-r from-transparent via-awsOrange/5 to-transparent w-full skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-out pointer-events-none" />

              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-awsOrange/10 border border-awsOrange/20 flex items-center justify-center text-awsOrange">
                      <ShieldCheck size={26} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-awsOrange font-bold block">
                        Flagship
                      </span>
                      <span className="text-xs text-zinc-300">AWS Certified</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-awsOrange px-2.5 py-1 bg-awsOrange/10 border border-awsOrange/20 rounded-md font-bold uppercase tracking-wider">
                    CCP Validated
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-4 leading-tight group-hover:text-awsOrange transition-colors duration-300">
                  AWS Certified <br />Cloud Practitioner
                </h3>

                {/* Subheading / Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-light">
                  Validates core cloud knowledge, security schemas, architecture models, AWS services (EC2, S3, IAM, Lambda, RDS), billing standards, and support networks. Formulates the baseline for cloud integration solutions.
                </p>

                {/* Key Skills badge details */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Cloud Concepts', 'AWS Core Services', 'IAM Security', 'Billing & Pricing'].map((badge) => (
                    <span key={badge} className="text-[9px] font-semibold text-zinc-200 px-2 py-0.5 bg-white/5 rounded border border-white/5">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Verification */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-awsOrange" />
                  <span className="text-xs text-zinc-400 font-medium">Credential URL Included</span>
                </div>
                
                <a
                  href="/AWS_Certified_Cloud_Practitioner.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-awsOrange hover:bg-awsOrange/80 text-black text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 transition-transform duration-300 hover:scale-102 cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Grid of Other Certifications (Spans 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {certsList.map((cert, idx) => (
              <a
                key={cert.title}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism p-5 rounded-2xl border border-white/5 shadow-md flex flex-col justify-between transition-all duration-400 hover:border-electricBlue/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-electricBlue/5 group h-full cursor-pointer"
                >
                  <div>
                    {/* Issuer & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-electricBlue font-bold uppercase tracking-widest">
                        {cert.issuer}
                      </span>
                      <Award size={16} className="text-zinc-400 group-hover:text-electricBlue transition-colors" />
                    </div>

                    {/* Certification Title */}
                    <h4 className="text-sm font-bold text-zinc-100 mb-2 group-hover:text-white leading-snug">
                      {cert.title}
                    </h4>

                    {/* Type / Area */}
                    <p className="text-[11px] text-zinc-300 font-light">
                      {cert.type}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1 text-[9px] text-zinc-400 group-hover:text-zinc-300 transition-colors mt-6 pt-3 border-t border-white/5">
                    <CheckCircle size={10} className="text-electricBlue" />
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
