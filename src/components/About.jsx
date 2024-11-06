import { motion } from 'framer-motion'

function About() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1fgBIO-kv2g8aEpXe0M2pKTV9hZkoHF6H';
    link.download = 'Alvin_Laia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-dark-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg dark:text-gray-300 leading-relaxed"
            >
              Hello! I'm Alvin Nonitehe Syas Putra Laia, a passionate frontend developer with a keen eye for creating 
              beautiful and functional web experiences. I specialize in building responsive websites 
              and web applications using modern technologies.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg dark:text-gray-300 leading-relaxed"
            >
              I am a dedicated frontend developer and UI/UX designer with a passion for creating visually appealing, 
              user-centric, and responsive digital experiences. With a strong foundation in HTML, CSS, JavaScript, 
              and modern frameworks like React, I craft interfaces that are not only functional but also intuitive 
              and visually engaging. My expertise in UI/UX design allows me to approach projects with a deep understanding 
              of user behavior, ensuring that every interaction is smooth and accessible. I thrive in collaborative 
              environments, leveraging my technical and creative skills to bridge the gap between design and development, 
              delivering products that are both innovative and aligned with best practices.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 mt-8"
          >
            <motion.button 
              onClick={handleDownloadCV}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Download CV
            </motion.button>

            <motion.a 
              href="https://github.com/alvinlaia11" 
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-6 py-2.5 rounded-full hover:bg-primary-50 dark:hover:bg-dark-bg transition-colors duration-300"
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About