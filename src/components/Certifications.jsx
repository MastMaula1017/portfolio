import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const certificationsData = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "COURSERA",
    date: "Oct' 24",
    link: "#", // Replace with real link
    color: "bg-bubblegum"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "COURSERA",
    date: "Oct' 24",
    link: "#", // Replace with real link
    color: "bg-mint-green"
  },
  {
    title: "Build Generative AI Apps with No-Code Tools",
    issuer: "INFOSYS",
    date: "Aug' 25",
    link: "#", // Replace with real link
    color: "bg-sky-blue"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov' 25",
    link: "#", // Replace with real link
    color: "bg-pastel-yellow"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative mt-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/60 to-transparent">
      <h2 className="heading-title underline-black text-center md:text-left">Licenses & Certifications 📜</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            className={`comic-card ${cert.color} p-6 flex flex-col h-full hover:-translate-y-2 transition-transform`}
          >
            <div className="w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Award size={24} />
            </div>
            
            <h3 className="text-xl font-bold font-fredoka leading-tight mb-2 flex-grow">
              {cert.title}
            </h3>
            
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-sm bg-white border-2 border-black px-2 py-1 rounded shadow-comic">
                {cert.issuer}
              </span>
              <span className="font-bold text-sm text-gray-800">
                {cert.date}
              </span>
            </div>
            
            <MagneticWrapper className="w-full mt-auto">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-black text-white py-2 border-2 border-black rounded font-bold hover:bg-gray-800 flex items-center justify-center gap-2 active:translate-y-1 transition-all shadow-comic group"
              >
                View Credential <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </MagneticWrapper>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative dots background element */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-[radial-gradient(black_2px,transparent_2px)] [background-size:12px_12px] opacity-20 -z-10 rounded-full border-4 border-black mix-blend-overlay"></div>
    </section>
  );
};

export default Certifications;
