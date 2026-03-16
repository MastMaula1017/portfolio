import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Mascot = () => {
  const [scrollData, setScrollData] = useState({
    docked: false,
    targetY: 0,
    targetX: '2vw',
    activeSection: 'hero'
  });

  useEffect(() => {
    const handleScroll = () => {
      const whoAmICard = document.getElementById('who-am-i-card');
      
      let newDocked = false;
      let newTargetY = 0;
      let newTargetX = '2vw';
      let active = 'hero';

      if (whoAmICard) {
        const rect = whoAmICard.getBoundingClientRect();
        // Calculate absolute document Y coordinate for the card
        const cardAbsoluteY = window.scrollY + rect.top;
        
        // The fixed mascot floats roughly at viewport height offset 
        const viewportOffset = window.innerHeight * 0.4;
        const currentMascotAbsoluteY = window.scrollY + viewportOffset;
        
        // We want the mascot to dock standing beside the top-left of the card
        newTargetY = cardAbsoluteY - 60;

        // If the viewport has scrolled far enough that the fixed mascot hits the target Y
        if (currentMascotAbsoluteY >= newTargetY) {
          newDocked = true;
          active = 'about';
          // Calculate horizontal docking to sit on the left outside of the card
          const mascotWidthEstimate = window.innerWidth > 768 ? 140 : 80;
          newTargetX = `${Math.max(rect.left - mascotWidthEstimate, 10)}px`;
        }
      }
      
      setScrollData({ 
        docked: newDocked, 
        targetY: newTargetY, 
        targetX: newTargetX,
        activeSection: active 
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { docked, targetY, targetX, activeSection } = scrollData;

  const currentImage = activeSection === 'about' ? '/pnt guy.png' : '/s.png';

  return (
    <div 
      className="z-[100] pointer-events-none"
      style={{
        position: docked ? 'absolute' : 'fixed',
        top: docked ? `${targetY}px` : '40vh',
        left: 0,
        width: '100%',
      }}
    >
      <motion.div
        initial={false}
        animate={{
          x: targetX,
          scale: docked ? 1 : 1, // Disable scaling to avoid shifting the calculated position too much
        }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
        className="w-fit"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImage}
              src={currentImage}
              alt="Mascot"
              className="w-32 md:w-48 lg:w-56 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mascot;
