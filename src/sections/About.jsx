import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/hero.png';

export const About = () => {
  const sectionRef = useRef(null);

  // Setup scroll animations targeting the section's entry
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Story text fade & translation scroll progress mapping
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.7], [40, 0]);

  // Profile image reveal values scroll progress mapping
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.8], [0.85, 1]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.8], [60, 0]);
  const blurValue = useTransform(scrollYProgress, [0.2, 0.8], [20, 0]);
  const imageFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen py-32 bg-[#050505] flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Narrative
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            About Myself
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        {/* Two-Column Storytelling Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Storyteller paragraphs */}
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="lg:col-span-7 flex flex-col gap-16 text-left"
          >
            {/* Paragraph 1 */}
            <div className="flex gap-4 items-start relative">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-200 leading-[1.25]">
                As a <span className="serif-italic font-normal normal-case text-neon-glow-strong">creative developer</span>, I craft tailor-made web experiences, blending technical precision and <span className="serif-italic font-normal normal-case text-neon-glow-strong">emotion.</span>
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="flex gap-4 items-start relative">
              <div className="flex flex-col gap-6">
                <p className="text-base sm:text-lg font-normal text-zinc-400 leading-relaxed max-w-xl">
                  Exploring the intersection of technology, design, and human experience. Every project is an opportunity to turn complexity into simplicity and ideas into meaningful digital journeys.
                </p>
                <div className="self-start">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold block mb-1">INFO</span>
                  <div className="h-[1px] w-8 bg-zinc-700" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Profile Image Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            {/* Soft background glow orb behind image */}
            <div className="absolute w-[280px] h-[280px] bg-[#FF1F1F]/10 rounded-full filter blur-[80px] -z-10 pointer-events-none" />

            <motion.div
              style={{ 
                opacity: imageOpacity, 
                scale: imageScale, 
                filter: imageFilter, 
                y: imageY 
              }}
              className="relative w-64 aspect-[3/4] sm:w-80 md:w-[350px] rounded-3xl overflow-hidden glassmorphism p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#FF1F1F]/20 group"
            >
              {/* Subtle neon red background glow layer inside card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1F1F]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              
              {/* Image element with soft grayscale to color transitions */}
              <img 
                src={profileImg} 
                alt="Akaash R K Profile" 
                className="w-full h-full object-cover rounded-[18px] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Edge neon glow overlay */}
              <div className="absolute inset-0 rounded-3xl border border-[#FF1F1F]/10 group-hover:border-[#FF1F1F]/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
