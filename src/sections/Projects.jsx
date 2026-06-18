import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Server, Database, LineChart } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsList = [
  {
    id: 'handyserve',
    title: 'HANDY SERVE',
    subtitle: 'Local Service Booking Platform',
    desc: 'An end-to-end booking governance ecosystem, streamlining connections between service seekers and local providers.',
    techs: ['React', 'Spring Boot', 'MongoDB', 'Oracle', 'AWS'],
    github: 'https://github.com/akaashbytes',
    demo: 'https://demo.com',
    graphicType: 'architecture',
    tabs: {
      challenge: 'Local service directories often lack real-time scheduling, secure transactional handshakes, and granular access separation for admins, service providers, and consumers.',
      solution: 'Engineered a multi-role web platform utilizing JSON Web Tokens (JWT) for authentication, unified scheduling calendars, and dynamic service request tracking.',
      architecture: 'React Client SPA communication with Spring Boot microservices, executing persistent storage transactions on MongoDB for listings and Oracle SQL for audit records.',
      outcome: 'A production-capable scheduling portal featuring provider search, status updates, administrative dashboard monitors, and automated notifications.',
    }
  },
  {
    id: 'sales-analysis',
    title: 'Sales Data Analysis',
    subtitle: 'Enterprise Trend Analytics',
    desc: 'Mining customer transactional data using structured queries to discover growth opportunities and optimize sales funnels.',
    techs: ['SQL', 'Oracle SQL', 'Data Mining'],
    github: 'https://github.com/akaashbytes',
    demo: null,
    graphicType: 'sql',
    tabs: {
      challenge: 'Raw sales logs in monolithic databases remained unaggregated, concealing critical patterns in product demand, seasonal buying cycles, and regional growth.',
      solution: 'Developed complex SQL scripts executing multi-table joins, subqueries, recursive CTEs, and window functions to compute sales patterns over time.',
      architecture: 'Optimized index queries run on database engines, generating structural analytical tables for cohort modeling, churn indicators, and product pairings.',
      outcome: 'Reduced reporting latency by 40% through indexing optimizations and delivered 12 actionable customer segmentation files to business stakeholders.',
    }
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation',
    subtitle: 'Business Intelligence Dashboard',
    desc: 'Interactive visual intelligence portal to monitor cohort habits, marketing responses, and operational metrics.',
    techs: ['Tableau', 'Power BI', 'Analytics'],
    github: 'https://github.com/akaashbytes',
    demo: 'https://demo.com',
    graphicType: 'dashboard',
    tabs: {
      challenge: 'Marketing managers lacked intuitive interfaces to segment clients, making promotional outreach untargeted and marketing budgets inefficient.',
      solution: 'Built interactive dashboard visuals linked to segmented SQL databases, mapping customer value cohorts (RFM analysis).',
      architecture: 'Data pipes feeding segmented metrics into Tableau and Power BI visual containers, enabling real-time dashboard cross-filtering.',
      outcome: 'Empowered campaign managers to filter lists across demographics instantly, contributing to a simulated 15% click-through-rate boost.',
    }
  }
];

const ProjectGraphic = ({ type }) => {
  if (type === 'architecture') {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-950 rounded-2xl border border-white/5 relative flex flex-col justify-center items-center p-6 overflow-hidden">
        <div className="flex flex-col gap-6 w-full max-w-[280px]">
          <div className="flex justify-between items-center bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-[10px] text-electricBlue font-bold uppercase tracking-wider">React Client</span>
            <Code2 size={16} className="text-electricBlue" />
          </div>
          <div className="h-6 flex justify-center items-center">
            <div className="w-[2px] h-full bg-gradient-to-b from-electricBlue to-awsOrange" />
          </div>
          <div className="flex justify-between items-center bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-[10px] text-awsOrange font-bold uppercase tracking-wider">Spring Boot Backend</span>
            <Server size={16} className="text-awsOrange" />
          </div>
          <div className="h-6 flex justify-center items-center">
            <div className="w-[2px] h-full bg-gradient-to-b from-awsOrange to-cyan-400" />
          </div>
          <div className="flex justify-around">
            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Database size={12} className="text-cyan-400" />
              <span className="text-[9px] text-zinc-300 font-bold">Oracle</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Database size={12} className="text-zinc-300" />
              <span className="text-[9px] text-zinc-300 font-bold">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sql') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#030305] rounded-2xl border border-white/5 relative flex flex-col justify-between p-6 font-mono text-[10px] text-left text-zinc-300 overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-3">
          <Database size={14} className="text-electricBlue" />
          <span className="text-[9px] text-zinc-200 uppercase tracking-widest font-bold">Query Analyzer</span>
        </div>
        <div className="flex-1 flex flex-col justify-around gap-1.5 text-xs text-electricBlue/90 leading-normal">
          <p className="text-zinc-500">{"-- Compute Customer Cohort Sales"}</p>
          <p><span className="text-awsOrange">SELECT</span> cohort_month, SUM(order_total)</p>
          <p><span className="text-awsOrange">FROM</span> (</p>
          <p className="pl-4"><span className="text-awsOrange">SELECT</span> customer_id,</p>
          <p className="pl-8">DATE_TRUNC(<span className="text-green-400">'month'</span>, min_date) <span className="text-awsOrange">AS</span> cohort_month</p>
          <p className="pl-4">...</p>
          <p><span className="text-awsOrange">GROUP BY</span> 1 <span className="text-awsOrange">ORDER BY</span> 1;</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-zinc-500">
          <span>Executed in 0.04s</span>
          <span className="text-green-500 font-bold">Status: Optimized</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[260px] bg-slate-950 rounded-2xl border border-white/5 relative flex flex-col p-6 overflow-hidden justify-between">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3">
        <LineChart size={14} className="text-awsOrange" />
        <span className="text-[10px] text-zinc-200 uppercase tracking-wider font-bold">RFM Segmentation Dashboard</span>
      </div>
      
      <div className="flex-1 flex items-end gap-3 justify-center py-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-20 bg-gradient-to-t from-awsOrange to-awsOrange/60 rounded-t-md relative group">
            <span className="absolute -top-6 text-[8px] text-zinc-200 left-1/2 -translate-x-1/2">42%</span>
          </div>
          <span className="text-[8px] text-zinc-500 font-bold">Loyal</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-28 bg-gradient-to-t from-electricBlue to-electricBlue/60 rounded-t-md relative">
            <span className="absolute -top-6 text-[8px] text-zinc-200 left-1/2 -translate-x-1/2">65%</span>
          </div>
          <span className="text-[8px] text-zinc-500 font-bold">Champions</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-12 bg-white/10 rounded-t-md relative">
            <span className="absolute -top-6 text-[8px] text-zinc-200 left-1/2 -translate-x-1/2">18%</span>
          </div>
          <span className="text-[8px] text-zinc-500 font-bold">At Risk</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-zinc-400 border-t border-white/5 pt-2">
        <span>Tableau Live Data Sync</span>
        <span className="text-awsOrange font-bold">Active</span>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeTabs, setActiveTabs] = useState(
    projectsList.reduce((acc, p) => ({ ...acc, [p.id]: 'challenge' }), {})
  );

  const setTab = (projectId, tabName) => {
    setActiveTabs(prev => ({
      ...prev,
      [projectId]: tabName
    }));
  };

  return (
    <section id="projects" className="relative py-24 bg-[#020202] overflow-hidden">
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-electricBlue/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-awsOrange/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Featured Projects
          </h2>
          <p className="text-zinc-300 text-sm mt-3 max-w-xl leading-relaxed">
            Presented as technical product launches. Select tabs to explore the problem resolution cycle and architectural patterns.
          </p>
          <div className="w-20 neon-light-strip mt-5" />
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-24">
          {projectsList.map((project, idx) => {
            const activeTab = activeTabs[project.id] || 'challenge';
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/5 pb-16 last:border-0 last:pb-0"
              >
                {/* Visual Graphic Representation */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: isEven ? 2 : -2 }}
                    transition={{ duration: 0.4 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-electricBlue/10 to-awsOrange/10 rounded-2xl filter blur-xl group-hover:opacity-100 transition-opacity opacity-50" />
                    <ProjectGraphic type={project.graphicType} />
                  </motion.div>
                </div>

                {/* Case Study Details Panel */}
                <div className={`lg:col-span-7 flex flex-col text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold tracking-wider text-zinc-300 px-2.5 py-1 bg-white/5 border border-white/5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Titles */}
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-awsOrange transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-awsOrange block mb-6">
                    {project.subtitle}
                  </span>

                  <p className="text-sm text-zinc-200 leading-relaxed mb-8 font-light">
                    {project.desc}
                  </p>

                  {/* Case Study Tabs Navigation */}
                  <div className="flex border-b border-white/5 mb-6">
                    {['challenge', 'solution', 'architecture', 'outcome'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setTab(project.id, tab)}
                        className={`text-[10px] md:text-xs uppercase tracking-wider font-bold py-2 px-4 border-b-2 transition-all duration-300 mr-2 -mb-[2px] ${
                          activeTab === tab
                            ? 'border-awsOrange text-white'
                            : 'border-transparent text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Case Study Active Tab Content Panel */}
                  <div className="min-h-[100px] mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light"
                      >
                        {project.tabs[activeTab]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-white text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 transition-all duration-300"
                    >
                      <GithubIcon size={14} />
                      <span>Repository</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-electricBlue to-electricBlue/80 text-black text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5 transition-transform duration-300 hover:scale-102"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
