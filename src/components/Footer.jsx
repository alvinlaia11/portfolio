import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Alvin Laia</h3>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Alvin Nonitehe Syas Putra Laia. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/alvinlaia11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <FaGithub className="text-xl" />
                <span className="md:hidden">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/alvinlaia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <FaLinkedin className="text-xl" />
                <span className="md:hidden">LinkedIn</span>
              </a>
              <a 
                href="mailto:alvinlaia2004@gmail.com" 
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <FaEnvelope className="text-xl" />
                <span className="md:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-6 pt-6 border-t border-gray-800">
          <div className="grid grid-cols-2 gap-4 text-center">
            <a href="#about" className="hover:text-blue-400 transition-colors py-2">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors py-2">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors py-2">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors py-2">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer; 