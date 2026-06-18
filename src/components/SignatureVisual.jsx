import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Code, Shield, Cpu, RefreshCw, Layers } from 'lucide-react';
import useMousePosition from '../hooks/useMousePosition';

export const SignatureVisual = () => {
  const mouse = useMousePosition();

  // Different depth multipliers for layers to achieve 3D parallax effect
  const calculateParallax = (multiplier) => {
    return {
      x: mouse.x * multiplier * 40,
      y: mouse.y * multiplier * 40,
    };
  };

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute w-[350px] h-[350px] bg-glow-radial rounded-full opacity-60 filter blur-3xl pointer-events-none" />

      {/* SVG Connecting Paths - Centered Background */}
      <svg className="absolute w-full h-full pointer-events-none z-0 overflow-visible" style={{ minWidth: '400px' }}>
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9900" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0052FF" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Animated paths between node center coordinates */}
        {/* AWS (center top: 50%, 15%) to Spring Boot (center-left: 30%, 45%) */}
        <motion.path
          d="M 250 80 Q 150 150 180 250"
          fill="none"
          stroke="url(#wireGradient)"
          strokeWidth="2"
          strokeDasharray="4 6"
          className="stroke-[1.5]"
          style={{ filter: 'url(#glow)' }}
          animate={{ strokeDashoffset: [-20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* AWS (center top: 50%, 15%) to DB Layer (center-right: 70%, 45%) */}
        <motion.path
          d="M 250 80 Q 350 150 320 250"
          fill="none"
          stroke="url(#wireGradient)"
          strokeWidth="2"
          strokeDasharray="4 6"
          style={{ filter: 'url(#glow)' }}
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />

        {/* Spring Boot (30%, 45%) to React Frontend (50%, 80%) */}
        <motion.path
          d="M 180 250 Q 180 370 250 420"
          fill="none"
          stroke="url(#wireGradient)"
          strokeWidth="2"
          strokeDasharray="5 5"
          style={{ filter: 'url(#glow)' }}
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
        />

        {/* Database Layer (70%, 45%) to React Frontend (50%, 80%) */}
        <motion.path
          d="M 320 250 Q 320 370 250 420"
          fill="none"
          stroke="url(#wireGradient)"
          strokeWidth="2"
          strokeDasharray="5 5"
          style={{ filter: 'url(#glow)' }}
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
        />
      </svg>

      {/* Floating Architecture Node Stack */}
      <div className="relative w-full max-w-[500px] h-full flex flex-col justify-between py-6 items-center z-10">
        
        {/* Layer 1: AWS Cloud (Top Node - Back Depth) */}
        <motion.div
          animate={calculateParallax(0.4)}
          transition={{ type: 'spring', stiffness: 75, damping: 20 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-awsOrange/20 rounded-2xl filter blur-xl group-hover:bg-awsOrange/35 transition-all duration-500" />
          <div className="relative glassmorphism px-6 py-4 rounded-2xl flex items-center gap-4 border-awsOrange/30 shadow-[0_0_20px_rgba(255,153,0,0.15)] group-hover:border-awsOrange/60 transition-all duration-300">
            <div className="p-3 bg-awsOrange/10 rounded-xl text-awsOrange border border-awsOrange/20 group-hover:scale-110 transition-transform duration-300">
              <Cloud size={28} className="animate-pulse-slow" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-awsOrange font-bold">Cloud Infrastructure</span>
              <h4 className="text-white font-semibold text-base">AWS Cloud Layer</h4>
              <p className="text-[11px] text-slate-400">EC2 • S3 • Lambda • IAM</p>
            </div>
            <div className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-awsOrange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-awsOrange"></span>
            </div>
          </div>
        </motion.div>

        {/* Middle Row (Spring Boot Services & Database Layer) */}
        <div className="w-full flex justify-between px-2 md:px-0">
          
          {/* Layer 2: Spring Boot Services (Left Middle Node - Medium Depth) */}
          <motion.div
            animate={calculateParallax(0.85)}
            transition={{ type: 'spring', stiffness: 75, damping: 18 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-electricBlue/10 rounded-2xl filter blur-xl group-hover:bg-electricBlue/20 transition-all duration-500" />
            <div className="relative glassmorphism px-5 py-3.5 rounded-2xl flex items-center gap-3.5 border-electricBlue/20 shadow-[0_0_20px_rgba(0,210,255,0.05)] group-hover:border-electricBlue/50 transition-all duration-300">
              <div className="p-2.5 bg-electricBlue/10 rounded-xl text-electricBlue border border-electricBlue/20 group-hover:rotate-12 transition-transform duration-300">
                <Cpu size={24} />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-electricBlue font-bold">Backend Logic</span>
                <h4 className="text-white font-semibold text-sm">Spring Boot API</h4>
                <p className="text-[10px] text-slate-400">RESTful • JWT Auth • JPA</p>
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Database Layer (Right Middle Node - Medium Depth) */}
          <motion.div
            animate={calculateParallax(0.7)}
            transition={{ type: 'spring', stiffness: 75, damping: 18 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/5 rounded-2xl filter blur-xl group-hover:bg-white/10 transition-all duration-500" />
            <div className="relative glassmorphism px-5 py-3.5 rounded-2xl flex items-center gap-3.5 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)] group-hover:border-white/30 transition-all duration-300">
              <div className="p-2.5 bg-white/5 rounded-xl text-slate-300 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Database size={24} />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Data Store</span>
                <h4 className="text-white font-semibold text-sm">Oracle & MongoDB</h4>
                <p className="text-[10px] text-slate-400">Relational + NoSQL</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Layer 4: React Frontend (Bottom Node - Foreground/High Depth) */}
        <motion.div
          animate={calculateParallax(1.2)}
          transition={{ type: 'spring', stiffness: 75, damping: 15 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-electricBlue/20 rounded-2xl filter blur-xl group-hover:bg-electricBlue/35 transition-all duration-500" />
          <div className="relative glassmorphism px-6 py-4 rounded-2xl flex items-center gap-4 border-electricBlue/30 shadow-[0_0_25px_rgba(0,210,255,0.15)] group-hover:border-electricBlue/60 transition-all duration-300">
            <div className="p-3 bg-electricBlue/10 rounded-xl text-electricBlue border border-electricBlue/20 group-hover:scale-110 transition-transform duration-300">
              <Code size={28} className="animate-spin-slow" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-electricBlue font-bold">Client Interface</span>
              <h4 className="text-white font-semibold text-base">React UI App</h4>
              <p className="text-[11px] text-slate-400">Vite • Tailwind CSS • Framer Motion</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};
