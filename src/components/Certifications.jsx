'use client'
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "AIML with Data Science",
      type: "Certificate of Completion",
      issuer: "Ethical Edufabrica Pvt. Ltd.",
      association: "in association with Advitiya, IIT Ropar",
      date: "January–February 2026",
      id: "EDU-ADR-AIMLDS31-0101260056",
      icon: "🤖",
      link: "/images/aiml-data-science-cert.png"
    },
    {
      title: "Visual Vortex 2.0",
      type: "Certificate of Participation",
      issuer: "GDG on Campus, Rishihood University",
      association: "Newton School of Technology",
      date: "2025",
      icon: "🎨",
      link: "/images/visual-vortex-cert.png"
    }
  ];

  return (
    <section id="certifications" className="section-padding py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            certifications<span className="text-cyan-400">.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-cyan-400 origin-left mt-2 w-16"
          />
        </div>

        <div 
          className="flex overflow-x-auto pb-8 gap-6 snap-x md:grid md:grid-cols-2 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 245, 212, 0.15)",
                borderColor: "rgba(0, 245, 212, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.05)"
              }}
              className="min-w-[300px] flex-1 bg-white/[0.03] rounded-xl p-7 border border-white/[0.06] transition-all duration-300 relative snap-start group"
            >
              {/* Verified Badge */}
              <div className="absolute top-6 right-6 text-green-500 bg-green-500/10 p-1.5 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="flex flex-col h-full">
                <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {cert.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400/80 text-xs uppercase tracking-wider font-semibold mb-4">
                  {cert.type}
                </p>

                <div className="space-y-1 mb-6 flex-grow">
                  <p className="text-white/90 font-medium text-sm">
                    {cert.issuer}
                  </p>
                  <p className="text-white/40 text-xs italic pb-2">
                    {cert.association}
                  </p>
                  <p className="text-white/50 text-xs flex items-center gap-1.5 pt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.date}
                  </p>
                  {cert.id && (
                    <p className="text-white/30 text-[10px] mt-1.5 font-mono bg-white/[0.02] inline-block px-2 py-0.5 rounded">
                      ID: {cert.id}
                    </p>
                  )}
                </div>

                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-cyan-400 transition-colors mt-auto pt-4 border-t border-white/[0.06] w-fit"
                >
                  View Certificate
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          #certifications .flex::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
};

export default Certifications;
