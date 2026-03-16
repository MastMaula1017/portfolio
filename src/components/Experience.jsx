import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-pastel-yellow relative z-0 mt-20">
      
      {/* Cartoon zigzag border on top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA0MCAyMCI+PHBhdGggZD0iTTIwIDEwTDAgMEg0MEwyMCAxMFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat-x -z-10 -mt-7"></div>
      
      <h2 className="heading-title">Experience & Training 🚀</h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Training */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0"
        >
          <div className="md:grid md:grid-cols-5 gap-8 items-center relative">
            
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[20%] top-0 bottom-[-3rem] w-2 bg-black z-0 rounded-full transform -translate-x-1/2"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 md:left-[20%] w-8 h-8 rounded-full bg-bubblegum border-4 border-black z-10 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
               <Briefcase size={14} />
            </div>
            
            <div className="md:col-span-1 text-left md:text-right hidden md:block">
              <span className="font-fredoka font-bold text-xl block">Summer Training</span>
              <span className="text-gray-600 font-bold block bg-white border-2 border-black px-2 py-1 rounded inline-block shadow-[2px_2px_0_0_rgba(0,0,0,1)] rotate-3 mt-2">
                Jun 2025 - Jul 2025
              </span>
            </div>
            
            <div className="md:col-span-4 comic-card p-6 bg-white ml-6 md:ml-8 relative">
              <div className="absolute top-4 -left-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-black border-b-[10px] border-b-transparent z-0"></div>
              <div className="absolute top-[18px] -left-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white border-b-[8px] border-b-transparent z-10"></div>
              
              <div className="md:hidden mb-4">
                 <span className="font-fredoka font-bold text-xl inline-block bg-bubblegum px-2 border-2 border-black rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Summer Training</span>
                 <p className="text-sm font-bold mt-1 text-gray-600">Jun 2025 - Jul 2025</p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Intensive DSA Program</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold text-gray-800">
                <li>Completed an intensive 6–8 week program focused on core Data Structures and Algorithms.</li>
                <li>Implemented arrays, linked lists, stacks, and queues using C++.</li>
                <li>Solved 100+ algorithmic problems covering sorting, searching, and recursion.</li>
                <li>Engaged in 20+ peer code reviews, adopting clean coding standards.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0 pt-8"
        >
          <div className="md:grid md:grid-cols-5 gap-8 items-center relative">
            
            <div className="absolute left-0 top-6 md:left-[20%] w-8 h-8 rounded-full bg-mint-green border-4 border-black z-10 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
               <Trophy size={14} />
            </div>
            
            <div className="md:col-span-1 text-left md:text-right hidden md:block mt-8 md:mt-0">
              <span className="font-fredoka font-bold text-xl block">Achievements</span>
              <span className="text-gray-600 font-bold block mt-2">Highlights</span>
            </div>
            
            <div className="md:col-span-4 comic-card p-6 bg-mint-green ml-6 md:ml-8 relative">
              <div className="absolute top-4 -left-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-black border-b-[10px] border-b-transparent z-0"></div>
              <div className="absolute top-[18px] -left-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-mint-green border-b-[8px] border-b-transparent z-10"></div>
              
              <div className="md:hidden mb-4">
                 <span className="font-fredoka font-bold text-xl inline-block bg-white px-2 border-2 border-black rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Achievements</span>
              </div>

              <ul className="space-y-4 font-semibold text-gray-900">
                <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0_0_rgba(0,0,0,1)]"><Award size={14} /></div>
                   <span>Designed a real-time leaderboard system enabling live progress tracking and increased engagement.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0_0_rgba(0,0,0,1)]"><Award size={14} /></div>
                   <span>Blocked 95% of unwanted traffic by implementing rate limiting, improving API stability.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0_0_rgba(0,0,0,1)]"><Award size={14} /></div>
                   <span>Improved user consistency by ~25% through a reward-based challenge system.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
