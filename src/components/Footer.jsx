import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Rocket, Star, Heart } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const interactiveElements = [
    { id: 'code', icon: <Rocket size={24} />, text: 'Launched with Code', color: 'bg-bubblegum' },
    { id: 'coffee', icon: <Coffee size={24} />, text: 'Fueled by Logic', color: 'bg-mint-green' },
    { id: 'heart', icon: <Heart size={24} />, text: 'Built with Passion', color: 'bg-sky-blue' },
    { id: 'star', icon: <Star size={24} />, text: 'Aiming for the Stars', color: 'bg-pastel-yellow' }
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-black text-white pt-20 pb-10 border-t-8 border-black z-20">
      
      {/* Cityscape Silhouette Background */}
      <div 
         className="absolute bottom-0 w-[200%] h-32 bg-white/5 flex items-end -z-10"
         style={{ clipPath: 'polygon(0% 100%, 0% 80%, 5% 80%, 5% 50%, 10% 50%, 10% 10%, 15% 10%, 15% 60%, 20% 60%, 20% 30%, 25% 30%, 25% 80%, 30% 80%, 30% 20%, 35% 20%, 35% 50%, 40% 50%, 40% 70%, 45% 70%, 45% 40%, 50% 40%, 50% 90%, 55% 90%, 55% 20%, 60% 20%, 60% 60%, 65% 60%, 65% 10%, 70% 10%, 70% 50%, 75% 50%, 75% 80%, 80% 80%, 80% 30%, 85% 30%, 85% 70%, 90% 70%, 90% 40%, 95% 40%, 95% 80%, 100% 80%, 100% 100%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* The Interactive Dock */}
        <div className="bg-white border-4 border-black p-4 rounded-3xl shadow-[0_8px_0_0_rgba(156,163,175,0.5)] flex gap-4 md:gap-8 mb-16 transform transition-all duration-300 hover:shadow-[0_12px_0_0_rgba(255,183,178,1)]">
           {interactiveElements.map((el) => (
              <MagneticWrapper key={el.id}>
                <motion.div 
                   onHoverStart={() => setHoveredIcon(el.id)}
                   onHoverEnd={() => setHoveredIcon(null)}
                   whileHover={{ y: -10, scale: 1.1 }}
                   className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border-4 border-black flex items-center justify-center cursor-pointer relative shadow-[4px_4px_0_0_rgba(0,0,0,1)] ${hoveredIcon === el.id ? el.color : 'bg-gray-100'}`}
                >
                   <div className={`${hoveredIcon === el.id ? 'text-black' : 'text-gray-600'}`}>
                      {el.icon}
                   </div>
                   
                   {/* Tooltip */}
                   <AnimatePresence>
                     {hoveredIcon === el.id && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10, scale: 0.8 }}
                         animate={{ opacity: 1, y: -20, scale: 1 }}
                         exit={{ opacity: 0, y: 10, scale: 0.8 }}
                         className={`absolute -top-14 w-max px-4 py-2 border-2 border-black rounded-xl font-bold font-fredoka shadow-[2px_2px_0_0_rgba(0,0,0,1)] text-black z-30 ${el.color}`}
                       >
                         {el.text}
                         {/* Tooltip pointer */}
                         <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 border-black rotate-45 ${el.color}`}></div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </motion.div>
              </MagneticWrapper>
           ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-end gap-10 border-b-4 border-gray-800 pb-12 mb-8">
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black font-fredoka tracking-tight text-white inline-block relative group">
                <span className="relative z-10 text-stroke">VANSH RATURI</span>
                <span className="absolute bottom-0 left-0 w-full h-4 bg-sky-blue -z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h2>
              <p className="text-gray-400 font-nunito font-semibold text-lg md:text-xl max-w-md mt-4">
                Thank you for scrolling to the end. The internet is huge, but you made it here!
              </p>
           </div>
           
           <MagneticWrapper>
             <button 
               onClick={scrollToTop}
               className="group relative inline-flex items-center justify-center bg-white text-black font-black font-fredoka text-xl px-8 py-4 border-4 border-black rounded-lg shadow-[6px_6px_0_0_rgba(138,222,155,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(138,222,155,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all"
             >
               BEAM ME UP 🛸
               <div className="absolute inset-0 border-4 border-black rounded-lg transform scale-105 opacity-0 group-hover:opacity-100 group-hover:animate-ping -z-10"></div>
             </button>
           </MagneticWrapper>
        </div>

        <div className="w-full flex justify-between items-center text-sm md:text-base font-bold text-gray-500 font-nunito">
            <div>
              &copy; {new Date().getFullYear()} Vansh Raturi.
            </div>
            <div className="flex gap-4">
               <span className="hover:text-white cursor-crosshair">Privacy Policy (Just Kidding)</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
