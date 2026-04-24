import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  const projects = [
    {
      title: 'HealthSync',
      label: '🏥 healthcare platform',
      description: "An innovative platform that leverages AI-based matching logic to dynamically connect patients with the most relevant doctors based on health concerns.",
      techStack: ['React', 'Node.js', 'Tailwind CSS', 'AI Matching'],
      githubLink: 'https://github.com/Chait0001/HealthSync-FInal.git',
      demoLink: 'https://health-sync-final-syvo.vercel.app',
    },
    {
      title: 'Zentron',
      label: '🤖 ai chatbot',
      description: "A full-stack AI chatbot application featuring live conversational capabilities. Integrated with Groq API for fast responses, supported by a robust MERN backend.",
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Groq API'],
      githubLink: 'https://github.com/Chait0001/Zentron.git',
      demoLink: 'https://zentron-chi.vercel.app/',
    },
    {
      title: 'Authentication System',
      label: '🔧 foundational stuff',
      description: "A full JWT auth flow — signup, login, protected routes, the works. Built this to really understand how auth works under the hood, not just copy-paste from tutorials.",
      techStack: ['Node.js', 'Express.js', 'JWT', 'MongoDB', 'bcrypt'],
      githubLink: 'https://github.com/Chait0001/auth-system',
      demoLink: null,
    },
    {
      title: 'Task Manager App',
      label: '⚡ full stack',
      description: "My go-to project for trying out new React patterns. Full CRUD, auth baked in, and an API that I'm actually proud of. Yes, another todo app — but this one's got auth.",
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/Chait0001/task-manager',
      demoLink: null,
    },
    {
      title: 'RBAC REST API',
      label: '🔐 backend deep-dive',
      description: "Role-based access control done properly. Admins, users, permissions — the kind of backend architecture that makes you feel like a real engineer.",
      techStack: ['Node.js', 'Express.js', 'JWT', 'MySQL', 'RBAC'],
      githubLink: 'https://github.com/Chait0001/rbac-api',
      demoLink: null,
    },
    {
      title: 'DOIFY',
      label: '⚡ frontend project',
      description: "A beautiful lofi-themed productivity app to manage tasks, projects & goals. Built with a cozy dark UI, animated banner, and localStorage persistence.",
      techStack: ['React.js', 'Vite', 'Tailwind CSS', 'localStorage', 'Canvas Confetti'],
      githubLink: 'https://github.com/Chait0001/Doify',
      demoLink: 'https://doify-nine.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          projects<span className="text-white/20">.</span>
        </h2>
        <p className={`text-white/30 text-sm mb-12 font-light transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          things i've actually built and shipped
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white/[0.03] rounded-none p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-0.5 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="inline-block text-xs text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-none px-3 py-1 mb-4 font-light">
                {project.label}
              </span>

              <h3 className="text-lg font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm mb-5 leading-relaxed font-light">{project.description}</p>
              <div className="mb-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/[0.04] rounded-none text-xs text-white/30 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/[0.06] items-center">
                <HoverBorderGradient
                  as="a"
                  href={project.demoLink || "#"}
                  target={project.demoLink ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  containerClassName="rounded-full"
                  className="bg-black text-white/60 hover:text-white flex items-center space-x-2 text-xs uppercase tracking-wider px-4 py-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </HoverBorderGradient>

                <HoverBorderGradient
                  as="a"
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  containerClassName="rounded-full"
                  className="bg-black text-white/60 hover:text-white flex items-center space-x-2 text-xs uppercase tracking-wider px-4 py-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </HoverBorderGradient>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
