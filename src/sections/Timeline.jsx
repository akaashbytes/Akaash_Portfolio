import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code, Database } from 'lucide-react';

const timelineEvents = [
  {
    role: 'Computer Science Student',
    period: '2022 - Present',
    icon: GraduationCap,
    desc: 'Acquired foundational concepts in algorithms, data structures, object-oriented Java programming, database theory, and operating system principles.',
    side: 'left',
  },
  {
    role: 'Software Development Internship',
    period: 'Early Stage Experience',
    icon: Briefcase,
    desc: 'Engaged in professional dev pipelines, writing functional backend features, reviewing SQL queries, and learning code collaboration standards.',
    side: 'right',
  },
  {
    role: 'AWS Certified Cloud Practitioner',
    period: 'Professional Validation',
    icon: Award,
    desc: 'Mastered cloud service frameworks (EC2, S3, IAM, Lambda), shared security schemas, and billing models, verifying core cloud capabilities.',
    side: 'left',
  },
  {
    role: 'Full Stack Development Projects',
    period: 'Portfolio Phase',
    icon: Code,
    desc: 'Built complex full stack web projects (e.g. HandyServe) featuring JWT credentials, Spring Boot APIs, and React interfaces.',
    side: 'right',
  },
  {
    role: 'Cloud Computing Projects',
    period: 'System Architecture Phase',
    icon: Database,
    desc: 'Deployed relational database nodes inside private subnets, configuring secure gateways, and routing traffic with elastic load balancers.',
    side: 'left',
  },
  {
    role: 'Future Software Engineer',
    period: 'Target Integration',
    icon: Briefcase,
    desc: 'Ready to join cloud engineering, backend development, or full-stack software development teams to build scalable enterprise apps.',
    side: 'right',
  },
];

export const Timeline = () => {
  return (
    <section id="journey" className="relative py-24 bg-[#020202] overflow-hidden">
      {/* Dynamic Background Spotlight */}
      <div className="absolute top-[40%] right-[0%] w-[350px] h-[350px] bg-awsOrange/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Career Timeline
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        {/* Timeline Flow Container */}
        <div className="relative">
          
          {/* Vertical center connecting bar (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF1F1F] via-[#FF4D4D] to-slate-800 shadow-[0_0_8px_#FF1F1F]" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 md:gap-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = event.side === 'left';

              return (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-12 items-center">
                  
                  {/* Left Column Content (Desktop) */}
                  <div className={`md:col-span-5 text-left md:text-right ${
                    isLeft ? 'md:block order-2 md:order-1' : 'hidden md:block md:invisible order-2'
                  }`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-awsOrange/30 hover:shadow-lg hover:shadow-awsOrange/5 transition-all duration-300"
                      >
                        <span className="text-[10px] text-awsOrange font-bold tracking-widest block mb-2">{event.period}</span>
                        <h4 className="text-base font-bold text-white mb-2">{event.role}</h4>
                        <p className="text-xs text-zinc-300 leading-relaxed font-light">{event.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Middle Center Icon Node */}
                  <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center order-1 md:order-2 mb-4 md:mb-0 relative">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-slate-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
                    >
                      <IconComponent size={18} />
                    </motion.div>
                  </div>

                  {/* Right Column Content (Desktop / Mobile) */}
                  <div className={`col-span-11 md:col-span-5 text-left ${
                    !isLeft ? 'block order-3' : 'md:hidden order-3'
                  }`}>
                    {(!isLeft || window.innerWidth < 768) && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-electricBlue/30 hover:shadow-lg hover:shadow-electricBlue/5 transition-all duration-300"
                      >
                        <span className="text-[10px] text-electricBlue font-bold tracking-widest block mb-2">{event.period}</span>
                        <h4 className="text-base font-bold text-white mb-2">{event.role}</h4>
                        <p className="text-xs text-zinc-300 leading-relaxed font-light">{event.desc}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
