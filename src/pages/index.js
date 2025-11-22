import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Terminal, 
  Cpu, 
  Github, 
  Youtube, 
  Mail, 
  ExternalLink, 
  Download, 
  Code2, 
  Coffee,
  Bug,
  Zap,
  Menu,
  X
} from 'lucide-react';

// --- DATA (Senin verilerin) ---
const DATA = {
  projects: [
    {
      title: "Terra Toggle",
      desc: "24 saatlik bir Jam için yapılmış, mekanik odaklı küçük ve eğlenceli bir oyun.",
      tags: ["Godot", "GDScript", "24h Jam"],
      image: "https://placehold.co/600x400/121212/00E676?text=Terra+Toggle&font=roboto",
      link: "https://3geetr.itch.io/terra-toggle",
      type: "play",
      featured: true // Bunu büyük kart yapacağız
    },
    {
      title: "Ore Detector",
      desc: "Minecraft'ta madenleri bulmayı kolaylaştıran gelişmiş bir datapack.",
      tags: ["MC Datapack", "JSON"],
      image: "https://cdn.modrinth.com/data/HM8KhJMj/images/f313dd37bba459e5932172f0b833317f780d7105.gif",
      link: "https://modrinth.com/datapack/ore-detector-dp",
      type: "download",
      featured: false
    },
    {
      title: "Flappy Count",
      desc: "Fikir bulamayınca yaptığım, basit ama sinir bozucu derecede bağımlılık yapan bir oyun.",
      tags: ["Godot", "Casual"],
      image: "https://placehold.co/600x400/121212/00E676?text=Flappy+Count",
      link: "https://3geetr.itch.io/flappy-count",
      type: "play",
      featured: false
    },
    {
      title: "Glass Hotbar",
      desc: "Minecraft arayüzünü temizleyen şeffaf cam temalı resource pack.",
      tags: ["Resourcepack", "UI Design"],
      image: "https://cdn.modrinth.com/data/MCBNoGFd/images/dc700fa7ae08e06cdfe409b022781cb6879eb279.png",
      link: "https://modrinth.com/collection/jMI2FKvl",
      type: "download",
      featured: false
    }
  ],
  skills: [
    "Godot Engine", "GDScript", "Python", "Arduino (C++)", "Level Design", "Minecraft API", "Git"
  ]
};

// --- COMPONENTS ---

// 1. Retro Scanline Effect (Ekranda çok hafif eski monitör çizgileri)
const ScanlineOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono font-bold text-xl tracking-tighter text-white">
          3ge<span className="text-[#00E676]">E</span>_
        </div>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">/WORK</a>
          <a href="#about" className="hover:text-white transition-colors">/ABOUT</a>
          <a href="#contact" className="hover:text-white transition-colors">/CONTACT</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#080808] border-b border-white/10 p-4 flex flex-col gap-4 font-mono text-gray-300">
          <a href="#work" onClick={() => setIsOpen(false)}>/WORK</a>
          <a href="#about" onClick={() => setIsOpen(false)}>/ABOUT</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>/CONTACT</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-[85vh] flex flex-col justify-center items-start px-6 md:px-24 pt-20 max-w-7xl mx-auto">
      {/* Arkaplan süslemeleri */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-[#00E676] rounded-full opacity-5 blur-[120px] pointer-events-none"></div>
      
      <div className="space-y-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-white/10 text-[#00E676] text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for freelance
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
        MAKE GAMES.<br/>
        BREAK LOOPS.<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-emerald-800">REPEAT.</span>
      </h1>

      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
        Hi, I'm <strong className="text-white">3geE</strong>. An independent game developer & Minecraft specialist.
        I build immersive worlds, functional mechanics, and pixel-perfect experiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#work" className="group relative px-6 py-3 bg-white text-black font-bold font-mono overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[#00E676] translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"></div>
          <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
             SEE PROJECTS <Gamepad2 size={18} />
          </span>
        </a>
        <a href="https://github.com/3geETR" target="_blank" className="px-6 py-3 border border-white/20 text-white font-mono hover:bg-white/5 transition-colors flex items-center gap-2">
          <Github size={18}/> GITHUB
        </a>
      </div>

      {/* Alt Kısım İstatistikleri - Süs amaçlı */}
      <div className="absolute bottom-10 w-full left-0 px-6 md:px-24 hidden md:flex gap-12 border-t border-white/5 pt-6 text-xs font-mono text-gray-500">
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">3+</span>
          <span>YEARS EXP</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">10+</span>
          <span>PROJECTS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">∞</span>
          <span>COFFEE CONSUMED</span>
        </div>
      </div>
    </header>
  );
};

const BentoGrid = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tight">Selected Works</h2>
        <span className="hidden md:block font-mono text-gray-500 text-sm">01 — PROJECTS</span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        
        {/* Featured Project (2 Column Wide) */}
        {DATA.projects.map((project, idx) => (
          <div 
            key={idx}
            className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#121212] ${project.featured ? 'md:col-span-2 md:row-span-2 md:h-full' : 'md:col-span-1'}`}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag, t) => (
                  <span key={t} className="text-[10px] uppercase font-bold tracking-wider text-[#00E676] bg-[#00E676]/10 px-2 py-1 rounded border border-[#00E676]/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${project.featured ? 'text-3xl md:text-4xl' : 'text-xl'} font-bold text-white mb-2`}>{project.title}</h3>
              <p className="text-gray-400 text-sm md:text-base line-clamp-2 mb-4 max-w-md">
                {project.desc}
              </p>
              
              <a 
                href={project.link} 
                target="_blank"
                className="inline-flex items-center gap-2 text-white font-bold border-b border-[#00E676] pb-1 hover:text-[#00E676] transition-colors"
              >
                {project.type === 'play' ? 'PLAY NOW' : 'DOWNLOAD'} <ExternalLink size={14}/>
              </a>
            </div>
          </div>
        ))}

        {/* "More on Itch.io" Kartı (Extra Box) */}
        <a href="https://3geetr.itch.io/" target="_blank" className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 flex flex-col justify-center items-center text-center hover:bg-[#121212] hover:border-[#00E676]/30 transition-all group cursor-pointer">
           <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <Gamepad2 className="text-gray-400 group-hover:text-white" />
           </div>
           <h3 className="text-white font-bold text-lg">View All Games</h3>
           <p className="text-gray-500 text-sm mt-2">Check out my entire library on itch.io</p>
        </a>

      </div>
    </section>
  );
};

const TerminalAbout = () => {
  return (
    <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Developer &<br/>Map Architect</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Game development isn't just about code; it's about crafting experiences. 
            I specialize in utilizing the <strong>Godot Engine</strong> to bring ideas to life, 
            and I push the boundaries of what's possible in <strong>Minecraft</strong> through complex datapacks.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Currently experimenting with Python automation and Arduino hardware integration 
            to bridge the gap between physical and digital play.
          </p>

          <div className="flex flex-wrap gap-3">
             {DATA.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#121212] border border-white/10 px-3 py-2 rounded-lg text-sm text-gray-300 font-mono">
                   <Zap size={14} className="text-[#00E676]" /> {skill}
                </div>
             ))}
          </div>
        </div>

        {/* Terminal Window UI */}
        <div className="w-full">
            <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-white/10 shadow-2xl font-mono text-sm">
                {/* Terminal Header */}
                <div className="bg-[#1A1A1A] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    <div className="ml-auto text-xs text-gray-600">bash — 3geE@portfolio</div>
                </div>
                
                {/* Terminal Body */}
                <div className="p-6 space-y-4 text-gray-300">
                    <div>
                        <span className="text-[#00E676]">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">whoami</span>
                    </div>
                    <div className="pl-4 text-gray-400">
                        "Independent Game Dev / Minecraft Specialist"
                    </div>

                    <div>
                        <span className="text-[#00E676]">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">ls ./current-focus</span>
                    </div>
                    <div className="pl-4 grid grid-cols-1 gap-1 text-gray-400">
                        <span>- Godot_Projects/</span>
                        <span>- Minecraft_Datapacks/</span>
                        <span>- Learning_Rust/</span>
                    </div>

                    <div>
                        <span className="text-[#00E676]">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">echo "Let's work together"</span>
                    </div>
                    <div className="pl-4 text-white animate-pulse">
                        _
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505] py-20 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
          LET'S BUILD <span className="text-[#00E676]">THE NEXT LEVEL</span>.
        </h2>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href="mailto:3geetr@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={32} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/3geETR" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Github size={32} strokeWidth={1.5} />
          </a>
          <a href="https://youtube.com/@3geETR" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Youtube size={32} strokeWidth={1.5} />
          </a>
          <a href="https://3geetr.itch.io/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Gamepad2 size={32} strokeWidth={1.5} />
          </a>
        </div>

        <p className="text-gray-600 font-mono text-sm">
          © {new Date().getFullYear()} 3geE. No templates harmed in the making of this site.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-[#00E676] selection:text-black font-sans">
      {/* Google Fonts Load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <ScanlineOverlay />
      <Navbar />
      <Hero />
      <BentoGrid />
      <TerminalAbout />
      <Footer />
    </div>
  );
}
