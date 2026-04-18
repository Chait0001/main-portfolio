import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

const SkillTile = ({ skill, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center aspect-square bg-white/[0.04] rounded-2xl border border-white/[0.06] transition-all duration-500 cursor-default group ${
        isHovered ? 'border-white/[0.15] bg-white/[0.07] scale-105' : 'hover:border-white/[0.10]'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ${
          isHovered ? 'scale-110' : ''
        } ${skill.invert ? 'invert' : ''}`}
        loading="lazy"
      />

      {/* Tooltip on hover */}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white/[0.08] border border-white/[0.08] rounded-md text-[11px] text-white/60 whitespace-nowrap transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
      >
        {skill.name}
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          skills & tech<span className="text-white/20">.</span>
        </h2>
        <p className={`text-white/30 text-sm mb-14 font-light text-center transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          tools i reach for daily
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 md:gap-5 pb-8">
          {skills.map((skill, index) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
