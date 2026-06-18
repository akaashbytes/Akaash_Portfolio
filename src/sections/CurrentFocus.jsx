import React from 'react';
import { motion } from 'framer-motion';
import { CloudLightning, Settings, ShieldCheck, GitPullRequest, Database } from 'lucide-react';

const learningItems = [
  {
    title: 'AWS Cloud Projects',
    icon: CloudLightning,
    color: 'text-awsOrange bg-awsOrange/10 border-awsOrange/20',
    details: 'Terraform Infrastructure as Code (IaC), AWS ECS / Fargate containers, VPC routing, and CloudWatch metrics monitoring.',
  },
  {
    title: 'System Design',
    icon: Settings,
    color: 'text-electricBlue bg-electricBlue/10 border-electricBlue/20',
    details: 'Microservice load balancing, caching architectures (Redis), database indexing, message queues (Kafka), and read/write scaling.',
  },
  {
    title: 'Spring Boot Architecture',
    icon: ShieldCheck,
    color: 'text-green-500 bg-green-500/10 border-green-500/20',
    details: 'Custom filter authentication logic, Spring Cloud API gateway, Eureka service registration registries, and JPA query optimizations.',
  },
  {
    title: 'DevOps Fundamentals',
    icon: GitPullRequest,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    details: 'CI/CD pipeline construction via GitHub Actions, Docker image containers, configuration isolation, and automated validation tests.',
  },
  {
    title: 'Scalable Backend Systems',
    icon: Database,
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    details: 'High-concurrency thread pools, database connection pooling parameters, asynchronous event brokers, and caching layouts.',
  },
];

export const CurrentFocus = () => {
  return (
    <section className="relative py-20 bg-[#020202] overflow-hidden">
      {/* Background Spotlight Glows */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-electricBlue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs uppercase tracking-widest text-[#FF1F1F] text-neon-glow font-bold block mb-3">
            Growth
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight text-neon-glow">
            Technical Focus
          </h2>
          <div className="w-20 neon-light-strip mt-4" />
        </div>

        {/* Staggered Grid of Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {learningItems.map((item, idx) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1, 
                  type: 'spring', 
                  stiffness: 80 
                }}
                whileHover={{ 
                  y: -8, 
                  borderColor: 'rgba(255, 153, 0, 0.3)',
                  boxShadow: '0 10px 30px -10px rgba(255, 153, 0, 0.1)'
                }}
                className="glassmorphism p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-left transition-all duration-400 group cursor-default"
              >
                <div>
                  {/* Floating Icon Indicator */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                    <IconComponent size={20} />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-white mb-3 tracking-wide transition-colors group-hover:text-awsOrange">
                    {item.title}
                  </h4>
                </div>

                {/* Subdetails description with improved contrast */}
                <p className="text-[11px] text-zinc-300 leading-relaxed font-light mt-auto">
                  {item.details}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
