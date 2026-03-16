import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding relative mt-20">
      <h2 className="heading-title">About Me</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="comic-card p-8 bg-sky-blue"
        >
          <div className="bg-white border-4 border-black p-6 rounded-xl transform -rotate-1 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-bubblegum border-4 border-black rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-mint-green border-4 border-black rounded-full" />
            
            <h3 className="text-3xl mb-4">Who am I? 🕵️‍♂️</h3>
            <p className="text-lg font-semibold leading-relaxed mb-4">
              I am Vansh Raturi, an energetic and critical-thinking full-stack developer currently pursuing my B.Tech in Computer Science at Lovely Professional University, Punjab.
            </p>
            <p className="text-lg font-semibold leading-relaxed">
              I love turning complex problems into beautiful, cartoonishly simple web apps. I thrive in team collaboration, adapt quickly to new tech, and bring strong self-direction to every project!
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-4xl font-fredoka font-bold rotate-1 inline-block pb-2 border-b-8 border-black w-max">Education 🎓</h3>
          
          <div className="comic-card p-6 bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-pastel-yellow border-b-4 border-l-4 border-black rounded-bl-3xl translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
            <h4 className="text-2xl mb-1">Lovely Professional University</h4>
            <p className="text-lg font-bold">B.Tech in Computer Science and Engineering</p>
            <p className="text-gray-600 font-bold">Aug 2023 - Present</p>
            <p className="mt-2 text-lg font-extrabold bg-mint-green px-3 py-1 border-2 border-black rounded-lg inline-block">CGPA: 6.4</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="comic-card p-6 bg-white">
                <h4 className="text-xl mb-1">Navyug School</h4>
                <p className="text-md font-bold">Intermediate (12th)</p>
                <p className="text-gray-600 font-bold mb-2">Apr 2021 - Mar 2022</p>
                <p className="font-extrabold bg-bubblegum px-3 py-1 border-2 border-black rounded-lg inline-block">74.2%</p>
             </div>
             
             <div className="comic-card p-6 bg-white">
                <h4 className="text-xl mb-1">Navyug School</h4>
                <p className="text-md font-bold">Matriculation (10th)</p>
                <p className="text-gray-600 font-bold mb-2">Apr 2019 - Mar 2020</p>
                <p className="font-extrabold bg-pastel-yellow px-3 py-1 border-2 border-black rounded-lg inline-block">75.1%</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
