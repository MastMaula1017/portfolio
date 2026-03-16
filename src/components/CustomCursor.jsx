import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over clickable elements like links or buttons
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial check for mobile devices to hide the custom cursor completely
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
       document.documentElement.style.cursor = 'auto';
       return; // Don't render or track on mobile
    } else {
       // Hide default cursor across the entire site on desktop
       document.documentElement.style.cursor = 'none';
       document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.style.cursor = 'auto'; // Cleanup
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 14,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? -15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <img src="/comic-arrow.svg" alt="cursor" className="w-full h-full drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
