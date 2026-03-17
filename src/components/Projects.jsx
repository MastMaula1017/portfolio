import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Lock, Maximize2, X, Play } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const projectsData = [
  {
    title: "Consultancy Platform",
    period: "Sep 2025 - Dec 2025",
    description: "Architected a scalable MERN stack app with 3 user roles, 13+ RESTful endpoints with JWT & OAuth 2.0. Built a conflict-free appointment algorithm, Razorpay integration, and low-latency Socket.io chat/video module.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Socket.io"],
    color: "bg-bubblegum",
    liveLink: "https://consultpro.vanshraturi.me/",
    image: "/consult.png",
    video: "/preview1.mp4",
    privateRepo: true
  },
  {
    title: "Telemedicine Platform",
    period: "Nov 2025 - Dec 2025",
    description: "Full-stack telemedicine app enabling remote doctor-patient consultations. Optimized UI flow, secure JWT role-based access control, and established a complete CI auto-deployment flow with Netlify and Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    color: "bg-mint-green",
    image: "/telemedicine.png",
    repoLink: "https://github.com/Shridhar2622/Telemedicine"
  },
  {
    title: "Health Gamification",
    period: "Jun 2025 - Aug 2025",
    description: "Interactive gamified platform driving a 25% increase in habit-completion. Reward-driven fitness systems and real-time leadership boards mapping live rankings to boost user engagement.",
    tech: ["PHP", "MySQL", "Tailwind CSS"],
    color: "bg-sky-blue",
    image: "/healthGamification.png",
    repoLink: "https://github.com/MastMaula1017/Gamified-Health-Website"
  }
];

const Projects = () => {
  const [previewMedia, setPreviewMedia] = useState(null);

  const openPreview = (media) => {
    if (media) setPreviewMedia(media);
  };

  const closePreview = () => {
    setPreviewMedia(null);
  };

  const isVideo = previewMedia?.endsWith('.mp4') || previewMedia?.endsWith('.webm');

  return (
    <section id="projects" className="section-padding mt-20 relative z-10">
      <h2 className="heading-title">Featured Projects 🚀</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => {
          const hasMedia = project.video || project.image;
          const previewSrc = project.video || project.image;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`comic-card ${project.color} flex flex-col h-full overflow-hidden`}
            >
              {/* Project Image Placeholder / Real Image */}
              <div className={`h-48 border-b-4 border-black relative overflow-hidden group flex-shrink-0 ${project.image ? '' : 'bg-white'}`}>
                 {project.image ? (
                   <>
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                     />
                     {project.video && (
                       <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white p-1.5 rounded-md border border-white/20 z-10">
                         <Play size={16} fill="white" />
                       </div>
                     )}
                   </>
                 ) : (
                   <>
                     <div className="absolute inset-0 flex items-center justify-center font-fredoka text-4xl opacity-50 font-bold group-hover:scale-110 transition-transform">
                       {project.title.split(' ')[0]}
                     </div>
                     {/* Halftone dots pattern background */}
                     <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                   </>
                 )}
              </div>
              
              <div className="p-5 md:p-6 flex-grow flex flex-col bg-opacity-50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight pr-2">{project.title}</h3>
                  
                  {hasMedia && (
                    <button 
                      onClick={() => openPreview(previewSrc)}
                      className="w-8 h-8 flex-shrink-0 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] flex items-center justify-center transition-all ml-auto focus:outline-none z-10"
                      aria-label="Preview media"
                      title={project.video ? "Watch Video Preview" : "View Full Image"}
                    >
                      {project.video ? <Play size={16} fill="black" /> : <Maximize2 size={16} />}
                    </button>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow relative z-0">
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
                  
                  <div className="flex gap-3 md:gap-4 mt-auto border-t-4 border-black pt-4">
                    <MagneticWrapper className="flex-1 flex">
                      {project.privateRepo ? (
                        <div className="w-full bg-gray-200 text-gray-500 cursor-not-allowed flex items-center justify-center gap-2 border-2 border-gray-400 py-2 rounded font-bold shadow-[2px_2px_0_0_rgba(156,163,175,1)]">
                           <Lock size={16} md:size={18} /> Code
                        </div>
                      ) : (
                        <motion.a 
                          href={project.repoLink} 
                          target="_blank" 
                          rel="noreferrer"
                          whileHover={{ y: -2 }} 
                          className="w-full bg-white flex items-center justify-center gap-2 border-2 border-black py-2 rounded font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] md:shadow-comic active:translate-y-1 active:shadow-none transition-all"
                        >
                          <Github size={16} md:size={18} /> Code
                        </motion.a>
                      )}
                    </MagneticWrapper>
                    {project.liveLink && (
                      <MagneticWrapper className="flex-1 flex">
                        <motion.a 
                          href={project.liveLink} 
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2 }} 
                          className="w-full bg-black text-white flex items-center justify-center gap-2 border-2 border-black py-2 rounded font-bold shadow-[2px_2px_0_0_rgba(255,183,178,1)] md:shadow-[4px_4px_0_0_rgba(255,183,178,1)] active:translate-y-1 active:shadow-none transition-all"
                        >
                          <ExternalLink size={16} md:size={18} /> Live
                        </motion.a>
                      </MagneticWrapper>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full Screen Image/Video Modal */}
      <AnimatePresence>
        {previewMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white border-4 border-black rounded-xl p-2 md:p-4 shadow-[12px_12px_0_0_rgba(0,0,0,1)]"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on media from closing
            >
              {/* Close Button styling matching Neo-Brutalist theme */}
              <button 
                onClick={closePreview}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-bubblegum border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-red-400 hover:scale-110 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all z-10"
                aria-label="Close preview"
              >
                <X size={24} className="text-black stroke-[3]" />
              </button>
              
              <div className="w-full h-full overflow-hidden border-2 border-black rounded-lg bg-gray-100 flex items-center justify-center relative min-h-[50vh] max-h-[85vh]">
                <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
                
                {isVideo ? (
                  <video 
                    src={previewMedia} 
                    className="w-full h-auto max-h-[85vh] object-contain relative z-10"
                    controls
                    autoPlay
                    loop
                    controlsList="nodownload"
                  />
                ) : (
                  <img 
                    src={previewMedia} 
                    alt="Project Preview" 
                    className="w-full h-auto max-h-[85vh] object-contain relative z-10" 
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
