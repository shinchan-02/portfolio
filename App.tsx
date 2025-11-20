import React from 'react';
import Navbar from './components/Navbar';
import TerminalComponent from './components/Terminal';
import SectionTitle from './components/SectionTitle';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Mail, 
  MapPin,
  Calendar,
  Cpu,
  Activity,
  Terminal as TerminalIcon
} from 'lucide-react';
import { 
  CONTACT_INFO, 
  SERVICES, 
  EXPERIENCES, 
  SKILL_CATEGORIES, 
  PROJECTS 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-300 selection:bg-primary selection:text-darker font-sans bg-grid-pattern">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
        {/* Background Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              
              {/* System Status Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 font-mono text-xs text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>SYSTEM_ONLINE :: READY_TO_DEPLOY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">&lt;DevOps /&gt;</span><br />
                Architect_
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Hi, I'm <strong className="text-white font-medium">Satyam Agrawal</strong>. Sr. SRE & DevOps Engineer.
                I design self-healing infrastructure, automate the mundane, and ensure your production environment stays boringly stable.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact" className="flex items-center gap-2 bg-primary text-darker px-6 py-3 rounded-sm font-mono font-bold hover:bg-sky-300 transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  Initialize_Project <ArrowRight size={18} />
                </a>
                <a href="/Satyam_Agarwal_devOps.pdf" download className="flex items-center gap-2 border border-slate-700 bg-surface/50 text-white px-6 py-3 rounded-sm font-mono font-bold hover:border-primary/50 hover:text-primary transition-all">
                  Download_CV <Download size={18} />
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform"><Linkedin size={24} /></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors hover:scale-110 transform"><Mail size={24} /></a>
                <a href={CONTACT_INFO.medium} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 font-medium hover:scale-105 transform">
                   <span>Medium</span>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <TerminalComponent />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section id="about" className="py-20 border-y border-slate-800/50 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="glass-panel p-8 md:p-12 rounded-sm border-l-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                <Activity className="text-primary" size={24}/> 
                Engineering Reliability
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                With over 4 years of hands-on experience at <span className="text-white font-mono text-sm bg-slate-800 px-1 rounded">Nykaa</span>, <span className="text-white font-mono text-sm bg-slate-800 px-1 rounded">Ontic</span>, and <span className="text-white font-mono text-sm bg-slate-800 px-1 rounded">Fleetx</span>, I specialize in bridging the gap between code and cloud. My mission: 99.99% uptime, zero manual deployments, and infrastructure that scales while you sleep.
              </p>
           </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Capabilities" 
            subtitle="Enterprise-grade infrastructure solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group glass-panel p-8 rounded-sm hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <span className="text-slate-600 font-mono text-xs group-hover:text-primary/50 transition-colors">ID: {service.id.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-mono">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 bg-dark/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Tech_Stack" subtitle="Tools deployed in production environments." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-surface/50 p-6 rounded-sm border border-slate-800 hover:border-primary/30 transition-colors group">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono">
                  <span className="w-1 h-5 bg-primary group-hover:bg-secondary transition-colors"></span>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-darker rounded-sm text-xs font-mono text-primary/80 border border-slate-700/50 hover:border-primary/40 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Deployments" subtitle="Selected high-impact projects." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => {
              const Icon = project.icon || TerminalIcon;
              return (
                <div key={project.id} className="glass-panel rounded-sm overflow-hidden flex flex-col h-full border border-slate-700/50 hover:border-primary/40 transition-all group">
                  <div className="p-8 flex-1 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent -mr-8 -mt-8 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-darker border border-slate-700 rounded-sm">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-mono text-secondary bg-secondary/5 border border-secondary/20 px-2 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="py-20 bg-dark/50 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="System_Log" subtitle="Professional Experience History" />
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -ml-[0.5px]"></div>
                
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-darker border-2 border-primary shadow-[0_0_10px_rgba(56,189,248,0.5)] -ml-[7px] mt-1.5 z-10"></div>
                  
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    <div className="glass-panel p-6 rounded-sm relative hover:border-primary/30 transition-all group">
                      {/* Connector Line */}
                      <div className={`hidden md:block absolute top-3 w-8 h-px bg-slate-700 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                      
                      <h3 className="text-lg font-bold text-white font-mono">{exp.role}</h3>
                      <div className="text-primary text-sm font-semibold mb-3">@{exp.company}</div>
                      
                      <div className="flex flex-col gap-1 text-xs text-slate-500 mb-4 font-mono uppercase tracking-wide border-b border-slate-700/50 pb-3">
                         <div className="flex items-center gap-2"><Calendar size={12} className="text-secondary"/> {exp.period}</div>
                         <div className="flex items-center gap-2"><MapPin size={12} className="text-secondary"/> {exp.location}</div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-primary mt-1 font-mono text-xs">{'>'}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800">
         {/* Background Blobs */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>
         
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <TerminalIcon className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
            Initialize Connection?
          </h2>
          <p className="text-xl text-slate-400 mb-10 font-light">
            Looking for an infrastructure audit, CI/CD overhaul, or Kubernetes migration? 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center justify-center gap-3 bg-primary text-darker px-8 py-4 rounded-sm font-bold text-lg font-mono hover:bg-sky-300 transition-all"
            >
              <Mail size={20} />
              Send_Packet
            </a>
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-transparent border border-slate-600 text-slate-300 px-8 py-4 rounded-sm font-bold text-lg font-mono hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin size={20} />
              /satyam-agrawal
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-600 text-xs font-mono">
            <p>SATYAM AGRAWAL © {new Date().getFullYear()} :: SRE // DEVOPS</p>
            <p className="mt-2">
               STATUS: <span className="text-green-500">ONLINE</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
