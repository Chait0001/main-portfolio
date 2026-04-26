'use client'
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
];

const SkillTile = ({ skill, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        scale: 1.1,
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderColor: "rgba(255, 255, 255, 0.15)"
      }}
      className="relative flex items-center justify-center aspect-square bg-white/[0.04] rounded-2xl border border-white/[0.06] transition-colors duration-300 cursor-default group"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className={`w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'invert' : ''}`}
        loading="lazy"
      />

      {/* Tooltip on hover */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white/[0.08] border border-white/[0.08] rounded-md text-[11px] text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 pointer-events-none">
        {skill.name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'backOut' }
    }
  }

  return (
    <section id="skills" className="section-padding py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            skills & tech<span className="text-cyan-400">.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-cyan-400 origin-center mt-2 w-16 mx-auto"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/30 text-sm mt-6 font-light"
          >
            tools i reach for daily
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-4 sm:grid-cols-6 gap-4 md:gap-5 pb-8"
        >
          {skills.map((skill) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              variants={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



