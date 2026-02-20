import { useState } from 'react'

const navLinks = [
  { name: 'Bosh sahifa', href: '#hero' },
  { name: 'Men haqimda', href: '#about' },
  { name: 'Loyihalar', href: '#projects' },
  { name: "Bog'lanish", href: '#contact' },
]

const projects = [
  {
    title: 'E-commerce Platform',
    desc: 'Zamonaviy onlayn do‘kon — React, Node.js',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-amber-500/20 to-orange-600/20',
    border: 'border-amber-500/30',
  },
  {
    title: 'Real-time Chat',
    desc: 'WebSocket asosidagi foydalanuvchilar chat ilovasi',
    tags: ['Socket.io', 'Express', 'React'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    border: 'border-emerald-500/30',
  },
  {
    title: 'AI Dashboard',
    desc: 'Ma\'lumotlarni vizualizatsiya qiluvchi panel',
    tags: ['Tailwind', 'Chart.js', 'Vite'],
    gradient: 'from-violet-500/20 to-purple-600/20',
    border: 'border-violet-500/30',
  },
  {
    title: 'Portfolio Generator',
    desc: 'Personal brending uchun portfolio generator',
    tags: ['Next.js', 'Framer', 'MDX'],
    gradient: 'from-rose-500/20 to-pink-600/20',
    border: 'border-rose-500/30',
  },
]

const skills = [
  'React', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL',
  'Git', 'Figma', 'REST API', 'Vite', 'MongoDB'
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-200 antialiased grid-bg">
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-amber-500/30 -top-48 -left-48" />
      <div className="orb w-[400px] h-[400px] bg-orange-600/20 top-1/2 -right-32" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Portfolio</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className={`absolute md:relative top-full left-0 right-0 md:top-0 mt-0 md:mt-0 p-6 md:p-0 glass md:bg-transparent md:border-0 ${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 md:gap-8`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 hover:text-amber-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-amber-400/90 text-sm tracking-widest mb-4 animate-pulse">
            Salom, men —
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            <span className="block text-zinc-100">Creative</span>
            <span className="gradient-text">Developer</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
            Dizayn va kodni birlashtirib, zamonaviy web ilovalar yarataman.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-zinc-900 font-semibold hover:bg-amber-400 transition-all hover:scale-105 glow"
            >
              Loyihalar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/5 transition-all font-medium"
            >
              Bog&apos;lanish
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 floating">
          <a href="#about" className="block text-zinc-500 hover:text-amber-400 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Men haqimda</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Frontend va backend texnologiyalari bo‘yicha tajribaga egaman. 
                Foydalanuvchi tajribasiga qiziqaman va har bir loyihada zamonaviy yechimlar qo‘llashga harakat qilaman.
              </p>
              <p>
                Dasturlashdan tashqari, dizayn va vizual kommunikatsiyaga qiziqaman — 
                kod va estetikaning kombinatsiyasi meni hayratda qoldiradi.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Loyihalar</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-16 max-w-xl">
            So‘nggi ishlarimdan ba’zilari
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <a
                key={project.title}
                href="#"
                className={`group block p-8 rounded-2xl bg-linear-to-br ${project.gradient} border ${project.border} hover:scale-[1.02] transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-amber-400/80 text-sm font-mono mb-2">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-white/5 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Bog&apos;lanish</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            Loyiha yoki hamkorlik haqida gaplashmoqchimisiz?
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@portfolio.uz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:border-amber-500/40 hover:text-amber-400 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:border-amber-500/40 hover:text-amber-400 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:border-amber-500/40 hover:text-amber-400 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
