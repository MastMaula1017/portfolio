import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Terminal, Minus, Square, X } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import MagneticWrapper from './MagneticWrapper';

const Contact = () => {
  const [buttonText, setButtonText] = useState("SEND MESSAGE");
  const [isMinimized, setIsMinimized] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("SENDING...");
    
    const formData = new FormData(event.target);
    // Replace with actual Web3Forms key
    formData.append("access_key", "590e0556-f4f3-40c1-9976-556cf79c6307");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Kaboom! Message Sent Successfully! 🚀", {
          style: {
            border: '4px solid black',
            padding: '16px',
            color: 'black',
            background: '#A1E8AF',
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            borderRadius: '12px'
          },
          iconTheme: { primary: 'black', secondary: '#A1E8AF' },
        });
        event.target.reset();
      } else {
        toast.error("Oops! Something went wrong.", {
          style: {
            border: '4px solid black',
            padding: '16px',
            color: 'black',
            background: '#FFB7B2',
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            borderRadius: '12px'
          }
        });
      }
    } catch (error) {
      toast.error("Network error. Try again later.", {
          style: {
            border: '4px solid black',
            padding: '16px',
            color: 'black',
            background: '#FFB7B2',
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            borderRadius: '12px'
          }
        });
    }
    setButtonText("SEND MESSAGE");
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };
  
  const handleMaximize = () => {
    setIsMinimized(false);
  };
  
  const handleClose = () => {
    toast.error("Nice try! You can't close me until you send a message.", {
      style: {
        border: '4px solid black',
        padding: '16px',
        color: 'black',
        background: '#FFB7B2',
        fontFamily: '"Fredoka", sans-serif',
        fontWeight: 'bold',
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        borderRadius: '12px'
      }
    });
  };

  return (
    <section id="contact" className="section-padding bg-black relative z-10 py-16 md:py-20 overflow-hidden mt-0">
      <Toaster position="bottom-center" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#A6C8FF]" style={{ backgroundImage: 'radial-gradient(#000 15%, transparent 16%), radial-gradient(#000 15%, transparent 16%)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 8px 8px', opacity: 0.2, zIndex: -1 }}></div>

      <div className="max-w-6xl mx-auto relative px-4 md:px-0">
         
         <h2 className="text-4xl md:text-5xl font-black font-fredoka text-white text-stroke-primary text-comic-3d text-center mb-10 underline decoration-wavy decoration-bubblegum transform -rotate-2">
           Let's Connect 📭
         </h2>

         {/* OS Window Container */}
         <div className="bg-[#f8f9fa] border-4 border-black rounded-lg shadow-[8px_8px_0_0_rgba(138,222,155,1)] flex flex-col relative z-20 overflow-hidden">
            
            {/* Window Header */}
            <div className="bg-[#FCCB06] border-b-4 border-black p-2 md:p-3 flex items-center justify-between rounded-t-[4px] z-30 relative">
              <div className="flex items-center gap-2">
                 <Terminal size={20} className="text-black" />
                 <span className="font-bold font-fredoka text-base md:text-lg text-black tracking-widest uppercase">Contact_Portal.exe</span>
              </div>
              <div className="flex items-center gap-2">
                 <button type="button" onClick={handleMinimize} className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:bg-gray-200 active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all"><Minus size={14}/></button>
                 <button type="button" onClick={handleMaximize} className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:bg-gray-200 active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all"><Square size={12}/></button>
                 <button type="button" onClick={handleClose} className="w-6 h-6 bg-bubblegum border-2 border-black flex items-center justify-center shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:bg-red-400 active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all"><X size={14}/></button>
              </div>
            </div>

            {/* Window Body */}
            <motion.div 
               animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0 : 1 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="flex flex-col lg:flex-row overflow-hidden"
            >
               
               {/* Left Column (The Content the User Liked) */}
               <div className="lg:w-5/12 p-6 md:p-8 relative bg-[#9cbff9] border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden flex flex-col justify-center">
                  
                  {/* Diagonal stripe pattern exactly like the image */}
                  <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#000,#000_5px,transparent_5px,transparent_40px)] pointer-events-none"></div>

                  <div className="relative z-10 w-full max-w-sm mx-auto">
                     
                     {/* Speech Bubble */}
                     <div className="bg-white border-4 border-black rounded-xl p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative w-full mb-6">
                       <div className="absolute -top-[16px] left-6 w-8 h-8 bg-white border-t-4 border-l-4 border-black transform rotate-45 z-[-1] rounded-sm"></div>
                       <p className="font-bold font-nunito text-base md:text-lg text-black leading-snug mb-3">
                          Looking for a developer to join your squad or have a cool project in mind? My inbox is a portal to new dimensions.
                       </p>
                       <p className="font-black font-fredoka text-lg md:text-xl text-[#f39b9c]">
                          Let's team up! 🤝
                       </p>
                     </div>
                     
                     {/* Buttons matching image exactly */}
                     <div className="flex flex-col gap-3 w-full">
                        <MagneticWrapper>
                          <a href="mailto:vansh14raturi@gmail.com" className="w-full bg-[#faebb7] border-4 border-black p-3 flex items-center gap-3 hover:bg-[#efdfa5] transition-colors text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none">
                             <Mail size={20} />
                             <span className="font-bold font-nunito text-base md:text-lg">vansh14raturi@gmail.com</span>
                          </a>
                        </MagneticWrapper>

                        <div className="flex gap-3">
                          <MagneticWrapper className="flex-1">
                            <a href="https://github.com/MastMaula1017" target="_blank" rel="noreferrer" className="w-full bg-white border-4 border-black p-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none">
                               <Github size={20} />
                               <span className="font-bold font-nunito text-base md:text-lg">GitHub</span>
                            </a>
                          </MagneticWrapper>
                          <MagneticWrapper className="flex-1">
                            <a href="https://www.linkedin.com/in/003va/" target="_blank" rel="noreferrer" className="w-full bg-white border-4 border-black p-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none">
                               <Linkedin size={20} />
                               <span className="font-bold font-nunito text-base md:text-lg">LinkedIn</span>
                            </a>
                          </MagneticWrapper>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Column (The Form) */}
               <div className="lg:w-7/12 p-6 md:p-8 lg:p-10 bg-white flex flex-col justify-center">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-5 w-full max-w-lg mx-auto">
                     
                     <div className="group relative">
                       <label className="font-black font-fredoka text-lg md:text-xl text-black mb-1 block tracking-wide">YOUR NAME</label>
                       <input 
                         type="text" 
                         name="name" 
                         required 
                         placeholder="John Doe"
                         className="w-full bg-gray-50 border-4 border-black p-3 font-nunito font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(138,222,155,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                       />
                     </div>

                     <div className="group relative">
                       <label className="font-black font-fredoka text-lg md:text-xl text-black mb-1 block tracking-wide">EMAIL ADDRESS</label>
                       <input 
                         type="email" 
                         name="email" 
                         required 
                         placeholder="john@example.com"
                         className="w-full bg-gray-50 border-4 border-black p-3 font-nunito font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(138,222,155,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                       />
                     </div>

                     <div className="group relative">
                       <label className="font-black font-fredoka text-lg md:text-xl text-black mb-1 block tracking-wide">MESSAGE</label>
                       <textarea 
                         name="message" 
                         required 
                         rows="3"
                         placeholder="What's on your mind?"
                         className="w-full bg-gray-50 border-4 border-black p-3 font-nunito font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(138,222,155,1)] focus:-translate-y-1 transition-all placeholder:text-gray-400 resize-none"
                       ></textarea>
                     </div>

                     <div className="mt-2">
                       <MagneticWrapper className="w-full">
                         <button type="submit" className="w-full bg-bubblegum border-4 border-black py-3 mb-1 font-black font-fredoka text-xl md:text-2xl text-black flex items-center justify-center gap-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:bg-[#ff9ca2] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[6px] active:translate-x-[6px] transition-all">
                            {buttonText} {buttonText === "SEND MESSAGE" && <Send size={24} className="animate-pulse" />}
                         </button>
                       </MagneticWrapper>
                     </div>

                  </form>
               </div>

            </motion.div>
         </div>

      </div>
    </section>
  );
};

export default Contact;
