import { useState, useEffect } from 'react';
import { NoiseBackground } from '@/components/ui/noise-background';

const roles = [
  'Software Developer',
  'Full Stack Developer',
  'MERN Stack Developer',
  'Backend Engineer',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 relative">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/50 mb-6 tracking-wide font-light">
            Hii I am Chaitanya, I am a
          </p>
          
          {/* Large role title with cyan accent and typewriter */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold mb-10 leading-[1.05] tracking-tight min-h-[1.2em]">
            <span className="hero-pink-text">
              {displayText}
            </span>
            <span className="text-cyan-400/60 animate-pulse">|</span>
          </h1>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <NoiseBackground
              containerClassName="w-fit p-[5px] rounded-full"
              gradientColors={[
                "rgb(255, 50, 120)",
                "rgb(50, 120, 255)",
                "rgb(255, 180, 50)",
              ]}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer rounded-full bg-black px-8 py-3.5 font-semibold text-sm tracking-wide text-white hover:bg-neutral-900 active:scale-[0.98] transition-all duration-200"
              >
                Download CV
              </a>
            </NoiseBackground>

            <NoiseBackground
              containerClassName="w-fit p-[5px] rounded-full"
              gradientColors={[
                "rgb(255, 50, 120)",
                "rgb(50, 120, 255)",
                "rgb(255, 180, 50)",
              ]}
            >
              <a
                href="https://github.com/Chait0001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 cursor-pointer rounded-full bg-black px-8 py-3.5 font-semibold text-sm tracking-wide text-white hover:bg-neutral-900 active:scale-[0.98] transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </NoiseBackground>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

