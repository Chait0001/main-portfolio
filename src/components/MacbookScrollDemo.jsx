import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const projects = [
  {
    title: 'Authentication System',
    label: '🔧 foundational stuff',
    description: "A full JWT auth flow — signup, login, protected routes, the works. Built this to really understand how auth works under the hood.",
    techStack: ['Node.js', 'Express.js', 'JWT', 'MongoDB', 'bcrypt'],
    githubLink: 'https://github.com/Chait0001/auth-system',
  },
  {
    title: 'Task Manager App',
    label: '⚡ full stack',
    description: "Full CRUD, auth baked in, and an API that I'm actually proud of. Yes, another todo app — but this one's got auth.",
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubLink: 'https://github.com/Chait0001/task-manager',
  },
  {
    title: 'RBAC REST API',
    label: '🔐 backend deep-dive',
    description: "Role-based access control done properly. Admins, users, permissions — the kind of backend architecture that makes you feel like a real engineer.",
    techStack: ['Node.js', 'Express.js', 'JWT', 'MySQL', 'RBAC'],
    githubLink: 'https://github.com/Chait0001/rbac-api',
  },
];

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <MacbookScroll
        title={
          <span className="text-white">
            projects<span className="text-white/20">.</span>
            <br />
            <span className="text-base font-normal text-white/30 mt-2 block">
              things i've actually built and shipped
            </span>
          </span>
        }
        showGradient={false}
      >
        {/* Projects rendered inside the MacBook screen */}
        <div className="h-full w-full bg-black p-4 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3 h-full">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/[0.04] rounded-lg p-4 border border-white/[0.08] flex flex-col"
              >
                <span className="inline-block text-[9px] text-white/30 bg-white/[0.06] border border-white/[0.06] rounded px-2 py-0.5 mb-2 font-light self-start">
                  {project.label}
                </span>
                <h3 className="text-[12px] font-semibold mb-1.5 text-white/90">
                  {project.title}
                </h3>
                <p className="text-white/40 text-[10px] mb-3 leading-relaxed font-light flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-white/[0.04] rounded text-[8px] text-white/30 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] text-white/30 hover:text-white/60 transition-colors pt-2 border-t border-white/[0.06]"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  SOURCE
                </a>
              </div>
            ))}
          </div>
        </div>
      </MacbookScroll>
    </div>
  );
}
