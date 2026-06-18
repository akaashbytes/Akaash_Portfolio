import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { RippleContext } from '../context/RippleContext';

export const Hero = () => {
  const { createRipple } = useContext(RippleContext);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for scroll parallax and fade
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 16,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full z-10 flex flex-col justify-center items-center h-full">
        <motion.div
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Professional Title Badge */}
          <motion.div 
            variants={itemVariants} 
            className="mb-6"
          >
            <span className="text-xs md:text-sm text-[#FF1F1F] text-neon-glow font-bold uppercase tracking-[0.3em]">
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          {/* Large Typography-First Header */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.1] mb-8 uppercase text-center"
          >
            BUILDING <span className="serif-italic font-normal normal-case text-neon-glow-strong">scalable</span> <br />
            DIGITAL PRODUCTS <br />
            WITH <span className="serif-italic font-normal normal-case text-neon-glow-strong">modern</span> WEB <br />
            TECHNOLOGIES <br />
            & <span className="serif-italic font-normal normal-case text-neon-glow-strong">cloud</span> SOLUTIONS
          </motion.h1>

          {/* Horizontal Centered Description Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl leading-relaxed mb-10 text-center font-normal"
          >
            Building scalable software, cloud-native solutions, and meaningful digital experiences that make an impact.
          </motion.p>

          {/* Call-to-actions (Kept hidden/clean as per layout but functional) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 items-center opacity-0 pointer-events-none h-0 overflow-hidden"
          >
            {/* View Projects */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              onClick={(e) => {
                createRipple(e.clientX, e.clientY);
              }}
              className="px-8 py-4 bg-black/80 text-white font-extrabold text-xs md:text-sm uppercase tracking-widest rounded-xl border-neon-glow flex items-center gap-2 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-[#FF1F1F]" />
            </motion.a>

            {/* Contact Me */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => {
                createRipple(e.clientX, e.clientY);
              }}
              className="px-8 py-4 bg-black/80 text-white font-extrabold text-xs md:text-sm uppercase tracking-widest rounded-xl border-neon-glow flex items-center gap-2 cursor-pointer"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Thin red progress line at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900/60 overflow-hidden">
        <div className="w-[30%] h-full bg-[#FF1F1F] shadow-[0_0_10px_#FF1F1F,0_0_20px_rgba(255,31,31,0.8)]" />
      </div>
    </section>
  );
};
