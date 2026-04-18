import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

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
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          experience<span className="text-white/20">.</span>
        </h2>
        <p className={`text-white/30 text-sm mb-12 font-light transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          things i'm actually decent at
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`bg-white/[0.03] rounded-none p-7 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-0.5 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.12}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
