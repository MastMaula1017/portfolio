import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-sky-blue relative">
      <h2 className="heading-title text-white underline-white">Catch Me Here 📬</h2>
      
      <div className="max-w-4xl mx-auto comic-card bg-white flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Info Side */}
        <div className="md:w-1/2 bg-pastel-yellow p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center">
          <h3 className="text-3xl mb-6">Let's Connect!</h3>
          <p className="font-semibold text-lg mb-8">
            I'm currently looking for full-time opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <a href="mailto:vansh14raturi@gmail.com" className="flex items-center gap-4 text-lg font-bold group">
              <div className="w-12 h-12 rounded-full bg-white border-4 border-black flex items-center justify-center group-hover:bg-bubblegum group-hover:-translate-y-1 transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <Mail size={20} />
              </div>
              <span className="group-hover:underline decoration-4 text-gray-800">vansh14raturi@gmail.com</span>
            </a>
            
            <a href="#" className="flex items-center gap-4 text-lg font-bold group">
              <div className="w-12 h-12 rounded-full bg-white border-4 border-black flex items-center justify-center group-hover:bg-mint-green group-hover:-translate-y-1 transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <Phone size={20} />
              </div>
              <span className="group-hover:underline decoration-4 text-gray-800">+91 8595116672</span>
            </a>
            
            <div className="flex items-center gap-4 text-lg font-bold">
              <div className="w-12 h-12 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <MapPin size={20} />
              </div>
              <span className="text-gray-800">Punjab, India</span>
            </div>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="md:w-1/2 p-8 md:p-12">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-fredoka font-bold text-lg mb-1 block">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-gray-50 border-4 border-black p-3 rounded-lg font-semibold focus:outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
              />
            </div>
            
            <div>
              <label className="font-fredoka font-bold text-lg mb-1 block">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-gray-50 border-4 border-black p-3 rounded-lg font-semibold focus:outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
              />
            </div>
            
            <div>
              <label className="font-fredoka font-bold text-lg mb-1 block">Message</label>
              <textarea 
                rows="4"
                placeholder="Say hello..."
                className="w-full bg-gray-50 border-4 border-black p-3 rounded-lg font-semibold focus:outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all resize-none"
              ></textarea>
            </div>
            
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-black text-white comic-button py-4 mt-2 hover:bg-gray-800 flex justify-center items-center gap-2"
            >
              Send Message <Mail size={20} />
            </motion.button>
          </form>
          
          <div className="flex justify-center gap-6 mt-8 border-t-4 border-black pt-6">
            <a href="https://github.com/MastMaula1017" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black hover:-translate-y-1 transition-transform">
               <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/003va/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 hover:-translate-y-1 transition-transform">
               <Linkedin size={32} />
            </a>
          </div>
        </div>

      </div>
      
      {/* Decorative element */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-bubblegum border-4 border-black rotate-45 z-0"
        style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
      />
    </section>
  );
};

export default Contact;
