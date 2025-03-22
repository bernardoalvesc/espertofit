
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-smartfit-orange text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2025 Desenvolvido por Bernardo Alves. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/bernardoalvesc"
            aria-label="GitHub"
            className="text-white/70 hover:text-white transition duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/bernardoalvesdev/"
            aria-label="LinkedIn"
            className="text-white/70 hover:text-white transition duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/bernardoalvesc_/"
            aria-label="Instagram"
            className="text-white/70 hover:text-white transition duration-300"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
