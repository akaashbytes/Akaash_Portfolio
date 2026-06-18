import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from '../components/TiltCard';
import { Server, Cloud, Monitor, Database, BarChart3 } from 'lucide-react';

const expertiseData = [
  {
    id: 1,
    title: 'Backend Engineering',
    icon: Server,
    color: 'border-electricBlue/20 hover:border-electricBlue/50',
    iconColor: 'text-electricBlue bg-electricBlue/10',
    percentage: 90,
    desc: 'Architecting scalable server-side systems, RESTful web services, token-based authorization structures, and enterprise application logic.',
    techs: ['Java', 'Spring Boot', 'REST APIs', 'JWT Auth'],
  },
  {
    id: 2,
    title: 'Cloud Computing',
    icon: Cloud,
    color: 'border-awsOrange/20 hover:border-awsOrange/50',
    iconColor: 'text-awsOrange bg-awsOrange/10',
    percentage: 85,
    desc: 'Provisioning secure cloud infrastructure, role authorization structures, serverless computation tasks, and database mappings.',
    techs: ['AWS', 'S3', 'IAM', 'Lambda', 'EC2'],
  },
  {
    id: 3,
    title: 'Frontend Development',
    icon: Monitor,
    color: 'border-electricBlue/20 hover:border-electricBlue/50',
    iconColor: 'text-electricBlue bg-electricBlue/10',
    percentage: 85,
    desc: 'Designing fluid, modern interactive layouts, structured hook mechanisms, global states, and production compilation bundles.',
    techs: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 4,
    title: 'Database Systems',
    icon: Database,
    color: 'border-slate-800 hover:border-slate-600',
    iconColor: 'text-slate-300 bg-slate-800/50',
    percentage: 80,
    desc: 'Structuring relational schemas, document models, writing structured query executions, and schema normalizations.',
    techs: ['Oracle SQL', 'MongoDB', 'SQL Tuning'],
  },
  {
    id: 5,
    title: 'Data Analytics',
    icon: BarChart3,
    color: 'border-awsOrange/20 hover:border-awsOrange/50',
    iconColor: 'text-awsOrange bg-awsOrange/10',
    percentage: 75,
    desc: 'Analyzing database records for customer trends, business insights, creating dynamic visualization charts, and metrics.',
    techs: ['SQL', 'Tableau', 'Power BI'],
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="relative py-24 bg-[#020202] overflow-hidden">
      {/* Background radial spotlight glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-awsOrange/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Abilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Core Expertise
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard>
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', stiffness: 80 }}
                  className={`relative glassmorphism px-6 py-8 rounded-2xl border ${item.color} shadow-lg transition-all duration-500 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Subtle top spotlight corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity" />

                  <div>
                    {/* Top Block: Title and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 ${item.iconColor}`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {item.percentage}% Focus
                      </span>
                    </div>

                    {/* Expertise Title */}
                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide group-hover:text-awsOrange transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    {/* Progress Line */}
                    <div className="w-full h-[3px] bg-white/5 rounded-full mb-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-awsOrange to-electricBlue rounded-full"
                      />
                    </div>

                    {/* Technologies tags list */}
                    <div className="flex flex-wrap gap-2">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold text-zinc-200 px-2.5 py-1 bg-white/5 rounded-md border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
