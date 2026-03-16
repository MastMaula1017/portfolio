import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["C++", "JavaScript", "C", "PHP"], color: "bg-bubblegum" },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"], color: "bg-mint-green" },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "MVC"], color: "bg-sky-blue" },
  { category: "Databases", items: ["MongoDB", "MySQL", "Prisma ORM"], color: "bg-pastel-yellow" },
  { category: "Soft Skills", items: ["Critical Thinking", "Team Collaboration", "Adaptability", "Self-Direction"], color: "bg-white" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding mt-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBMMTQgMTRNMjAgMEwzNCAxNE00MCAwTDIwIDIwTTAgMjBMMTQgMzRNMjAgMjBMMzQgMzRNNDAgMjBMMTIgNDAiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')]">
      <h2 className="heading-title">My Tech Stack 🛠️</h2>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {skillsData.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, rotate: 2 }}
            className={`comic-card p-6 flex-1 min-w-[300px] ${skillGroup.color} relative overflow-hidden`}
          >
            {/* Decorative shiny bit */}
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white opacity-40"></div>
            
            <h3 className="text-2xl font-fredoka font-bold mb-4 border-b-4 border-black inline-block pb-1">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="bg-white px-3 py-1 border-2 border-black rounded-lg font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
