'use client'
import { motion } from 'framer-motion';

const Experience = () => {
  const achievements = [
    {
      icon: '💻',
      title: '300+ problems solved',
      description: "mostly medium difficulty. we don't talk about the hard ones.",
    },
    {
      icon: '🧠',
      title: 'comfortable with DSA',
      description: "arrays, trees, graphs — the usual suspects. still working on DP though, not gonna lie.",
    },
    {
      icon: '🔐',
      title: 'built auth systems that actually work',
      description: "JWT, bcrypt, role-based access — the whole shebang. nobody's getting in without permission.",
    },
    {
      icon: '⚙️',
      title: 'backend is my comfort zone',
      description: 'Express, REST APIs, database stuff. I genuinely enjoy debugging server errors. yes, really.',
    },
  ];

  return (
    <section id="experience" className="section-padding py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            experience<span className="text-cyan-400">.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-cyan-400 origin-left mt-2 w-16"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/30 text-sm mt-6 font-light"
          >
            things i'm actually decent at
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.2 } 
              }}
              className="bg-white/[0.03] rounded-none p-7 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-0.5 group-hover:opacity-80 transition-opacity duration-300">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1.5 text-white/80 group-hover:text-white/95 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed font-light">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



