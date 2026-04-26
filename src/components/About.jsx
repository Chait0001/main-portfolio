'use client'
import { motion } from 'framer-motion';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Area (Left) */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 order-2 md:order-1"
          >
            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                About Me<span className="text-cyan-400">.</span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-0.5 bg-cyan-400 origin-left mt-2 w-16"
              />
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-6 text-white/70 text-base md:text-[17px] leading-relaxed font-light"
            >
              <p>
                Hey! I'm <span className="text-cyan-400 font-medium">Chaitanya Kumar</span>, a student at <span className="text-cyan-400 font-medium">Newton School of Technology</span> pursuing B.Tech in Computer Science and Artificial Intelligence. I'm a passionate full-stack developer who loves building responsive and interactive web experiences.
              </p>
              
              <p>
                I'm constantly learning and exploring new technologies to improve my skills and bring ideas to life. Whether it's building projects, solving problems, or diving deep into design, I enjoy the process of creating and growing.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Area (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="md:w-1/3 flex-shrink-0 order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3 }}
                src="/images/profile-photo.png" 
                alt="Chaitanya Kumar" 
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/5"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;



