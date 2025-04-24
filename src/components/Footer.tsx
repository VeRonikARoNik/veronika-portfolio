import React from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f5f0] dark:bg-[#1e0f0b] text-[#2b1a17] dark:text-cream py-12 border-t border-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Veronika</h3>
            <p className="mb-4 max-w-md">
              Creative engineer blending AI, 3D design, and digital elegance into unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/VeRonikARoNik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/veronika-hordieieva-a514b6296/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:vhordieieva@gmail.com" 
                className="p-2 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Tricity, Poland</li>
              <li><a href="mailto:vhordieieva@gmail.com" className="hover:text-gold transition-colors">vhordieieva@gmail.com</a></li>
              <li>+48 *** *** ***</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold/20 text-center">
          <p className="text-sm">
            © {currentYear} Veronika Hordieieva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
