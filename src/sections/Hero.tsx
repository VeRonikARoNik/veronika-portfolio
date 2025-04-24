import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:pt-24 md:pb-16 bg-[#f9f5f0] dark:bg-[#1e0f0b] text-[#2b1a17] dark:text-cream transition-colors duration-500"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="text-gold dark:text-gold">Veronika Hordieieva</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl max-w-xl leading-relaxed">
              I build ideas into objects, and visions into experiences.
            </h2>
            
            <p className="text-base md:text-lg max-w-xl leading-relaxed">
              From embedded systems to AI & digital design, I craft meaningful solutions with soul — where technology meets aesthetics.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gold text-[#2b1a17] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                View my work
                <ArrowDown size={18} />
              </button>
              
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-[#2b1a17] font-semibold rounded-lg transition-all"
              >
                Contact me
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/VeRonikARoNik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/veronika-hordieieva-a514b6296/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:vhordieieva@gmail.com" 
                className="p-2 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-gold shadow-xl">
              <img 
                src="/images/veronika-letters.jpg" 
                alt="Veronika Hordieieva" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="p-2 rounded-full border-2 border-gold text-gold"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
