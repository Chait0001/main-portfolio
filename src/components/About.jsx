import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  return (
    <section id="about" className="section-padding py-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Text Area (Left) */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">
              About Me
            </h2>
            
            <div className="space-y-6 text-white/70 text-base md:text-[17px] leading-relaxed font-light">
              <p>
                Hey! I'm <span className="text-cyan-400 font-medium">Chaitanya Kumar</span>, a student at <span className="text-cyan-400 font-medium">Newton School of Technology</span> pursuing B.Tech in Computer Science and Artificial Intelligence. I'm a passionate full-stack developer who loves building responsive and interactive web experiences.
              </p>
              
              <p>
                I'm constantly learning and exploring new technologies to improve my skills and bring ideas to life. Whether it's building projects, solving problems, or diving deep into design, I enjoy the process of creating and growing.
              </p>
            </div>
          </div>

          {/* Image Area (Right) */}
          <div className="md:w-1/3 flex-shrink-0 order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <img 
                src="/images/profile-photo.png" 
                alt="Chaitanya Kumar" 
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/5"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
