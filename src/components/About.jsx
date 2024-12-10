import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaLaptopCode, FaGithub, FaFileDownload, FaTimes, FaBars, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1KRJ3dVv8VDBoMdZa3hNlBcazpoNae-s6';
    link.download = 'Alvin_Laia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    {
      icon: <FaCode className="text-4xl text-primary-500" />,
      title: "Web Development",
      description: "Membangun aplikasi web modern dengan React.js, Node.js, dan teknologi terkini untuk memberikan pengalaman pengguna yang optimal.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <FaPaintBrush className="text-4xl text-primary-500" />,
      title: "UI/UX Design",
      description: "Menciptakan desain interface yang intuitif dan menarik dengan fokus pada user experience dan prinsip desain modern.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Research"]
    },
    {
      icon: <FaMobile className="text-4xl text-primary-500" />,
      title: "Mobile Design",
      description: "Merancang aplikasi mobile yang responsif dan user-friendly dengan memperhatikan detail dan kemudahan penggunaan.",
      technologies: ["Mobile UI", "iOS Design", "Android Design", "Interaction Design"]
    },
    {
      icon: <FaLaptopCode className="text-4xl text-primary-500" />,
      title: "Frontend Development",
      description: "Mengimplementasikan desain ke dalam kode dengan performa tinggi dan best practices modern.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Redux"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Saya adalah seorang <span className="text-primary-500 font-semibold">Full Stack Developer</span> dan 
            <span className="text-primary-500 font-semibold"> UI/UX Designer</span> yang passionate dalam menciptakan 
            solusi digital yang inovatif. Dengan pengalaman dalam pengembangan web dan desain interface, 
            saya menggabungkan kreativitas dan technical expertise untuk menghasilkan produk yang tidak hanya 
            fungsional tetapi juga menarik secara visual.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
            >
              Hire Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-gray-100 dark:bg-dark-card text-gray-800 dark:text-white px-8 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-dark-card/80 transition-colors"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <h3 className="text-xl font-bold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 dark:text-white">My Journey</h3>
          <div className="max-w-3xl mx-auto p-6 bg-gray-50 dark:bg-dark-card rounded-xl">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Perjalanan saya dimulai sebagai seorang web developer yang kemudian berkembang menjadi 
              full-stack developer dan UI/UX designer. Saya telah berkolaborasi dengan berbagai klien 
              dan tim untuk menghasilkan solusi digital yang inovatif dan user-centered. Fokus utama saya 
              adalah menciptakan produk yang tidak hanya memenuhi kebutuhan teknis tetapi juga memberikan 
              pengalaman pengguna yang luar biasa.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Menu Button - dengan responsive styling */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-50">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            {isMenuOpen ? (
              <FaTimes className="text-lg md:text-xl" />
            ) : (
              <FaBars className="text-lg md:text-xl" />
            )}
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-16 right-0 space-y-3 md:space-y-4"
              >
                <motion.a
                  href="https://github.com/alvinlaia11"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-colors group relative"
                >
                  <FaGithub className="text-lg md:text-xl" />
                  <span className="absolute right-full mr-3 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -translate-y-1/2 top-1/2 pointer-events-none">
                    GitHub Profile
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/alvinlaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#0077b5] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#006396] transition-colors group relative"
                >
                  <FaLinkedin className="text-lg md:text-xl" />
                  <span className="absolute right-full mr-3 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -translate-y-1/2 top-1/2 pointer-events-none">
                    LinkedIn Profile
                  </span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDownloadCV}
                  className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 transition-colors group relative"
                >
                  <FaFileDownload className="text-lg md:text-xl" />
                  <span className="absolute right-full mr-3 bg-gray-800 text-white px-2 py-1 rounded text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -translate-y-1/2 top-1/2 pointer-events-none">
                    Download CV
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll to Top Button - dengan responsive styling */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-gray-200 dark:bg-dark-card text-gray-600 dark:text-gray-300 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

    </section>
  );
}

export default About;