import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const projectsData = [
  {
    title: "Consultancy Platform",
    period: "Sep 2025 - Dec 2025",
    description: "Architected a scalable MERN stack app with 3 user roles, 13+ RESTful endpoints with JWT & OAuth 2.0. Built a conflict-free appointment algorithm, Razorpay integration, and low-latency Socket.io chat/video module.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Socket.io"],
    color: "bg-bubblegum"
  },
  {
    title: "Telemedicine Platform",
    period: "Nov 2025 - Dec 2025",
    description: "Full-stack telemedicine app enabling remote doctor-patient consultations. Optimized UI flow, secure JWT role-based access control, and established a complete CI auto-deployment flow with Netlify and Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    color: "bg-mint-green"
  },
  {
    title: "Health Gamification",
    period: "Jun 2025 - Aug 2025",
    description: "Interactive gamified platform driving a 25% increase in habit-completion. Reward-driven fitness systems and real-time leadership boards mapping live rankings to boost user engagement.",
    tech: ["PHP", "MySQL", "Tailwind CSS"],
    color: "bg-sky-blue"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding mt-20">
      <h2 className="heading-title">Featured Projects 🚀</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={`comic-card ${project.color} flex flex-col h-full`}
          >
            {/* Project Image Placeholder - stylized as a comic panel frame */}
            <div className="h-48 border-b-4 border-black bg-white relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center font-fredoka text-4xl opacity-50 font-bold group-hover:scale-110 transition-transform">
                 {project.title.split(' ')[0]}
               </div>
               {/* Halftone dots pattern background */}
               <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <span className="text-sm font-bold bg-white px-2 py-1 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap ml-2">
                  {project.period.split(" ")[2]} {/* Just the year */}
                </span>
              </div>
              
              <p className="text-gray-800 font-semibold mb-4 text-sm flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold bg-white border-2 border-black rounded px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto border-t-4 border-black pt-4">
                <MagneticWrapper className="flex-1 flex">
                  <motion.button whileHover={{ y: -2 }} className="w-full bg-white flex items-center justify-center gap-2 border-2 border-black py-2 rounded font-bold shadow-comic active:translate-y-1 active:shadow-none transition-all">
                    <Github size={18} /> Code
                  </motion.button>
                </MagneticWrapper>
                <MagneticWrapper className="flex-1 flex">
                  <motion.button whileHover={{ y: -2 }} className="w-full bg-black text-white flex items-center justify-center gap-2 border-2 border-black py-2 rounded font-bold shadow-[4px_4px_0_0_rgba(255,183,178,1)] active:translate-y-1 active:shadow-none transition-all">
                    <ExternalLink size={18} /> Live
                  </motion.button>
                </MagneticWrapper>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
