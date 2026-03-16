import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-32">
      {/* Decorative background vectors */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 md:right-32 w-24 h-24 bg-mint-green rounded-full border-4 border-black -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-10 md:left-32 w-16 h-16 bg-sky-blue border-4 border-black rotate-45 -z-10"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 bg-white border-4 border-black rounded-full font-fredoka font-bold w-max shadow-[4px_4px_0px_0px_rgba(255,183,178,1)] transform -rotate-2">
            👋 Hello, World!
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none">
            I'm <span className="text-white filter drop-shadow-[4px_4px_0_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">Vansh</span> <br/>
            Raturi
          </h1>
          
          <p className="text-xl md:text-2xl font-bold bg-white border-4 border-black p-4 inline-block w-max rounded-xl rotate-1 shadow-comic">
            Full-Stack Developer 🚀
          </p>
          
          <p className="text-lg md:text-xl max-w-lg mt-4 font-semibold">
            I build scalable, modern web applications. Specialized in the MERN stack and problem-solving.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="bg-bubblegum text-black comic-button flex gap-2 items-center hover:bg-[#ff9c95]">
              View Projects
            </a>
            <a href="mailto:vansh14raturi@gmail.com" className="bg-white text-black comic-button flex gap-2 items-center hover:bg-gray-100">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <motion.a whileHover={{ y: -5 }} href="https://github.com/MastMaula1017" target="_blank" rel="noreferrer" className="bg-white p-3 border-4 border-black rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-mint-green">
               <Github size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://linkedin.com/in/003va/" target="_blank" rel="noreferrer" className="bg-white p-3 border-4 border-black rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-sky-blue">
               <Linkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="mailto:vansh14raturi@gmail.com" className="bg-white p-3 border-4 border-black rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-pastel-yellow">
               <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Fun cartoonish avatar representation */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-mint-green rounded-full border-8 border-black transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-white rounded-full border-8 border-black overflow-hidden flex items-center justify-center">
              <span className="text-9xl">👨‍💻</span>
            </div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-bubblegum border-4 border-black p-4 rounded-xl font-fredoka font-bold text-xl rotate-12"
            >
              MERN
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-sky-blue border-4 border-black p-4 rounded-xl font-fredoka font-bold text-xl -rotate-12"
            >
              C++ Info
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
