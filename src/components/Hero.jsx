import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useState, useEffect } from 'react'

function Hero() {
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const fullName = "Alvin Nonitehe Syas Putra Laia"
  
  useEffect(() => {
    // Typing animation
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    // Scroll handler
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled === 0) {
        setIsVisible(true)
        currentIndex = 0 // Reset typing animation
        setText("") // Clear text to restart animation
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(typingInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible]) // Add isVisible to dependency array

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-dark-bg dark:to-dark-card relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-primary-100/20 to-transparent dark:from-primary-900/10 rounded-full transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-primary-100/20 to-transparent dark:from-primary-900/10 rounded-full transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.div
            key={isVisible ? "visible" : "hidden"}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
              Hi, I'm
            </h1>
          </motion.div>

          <motion.div
            key={isVisible ? "name-visible" : "name-hidden"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 text-3xl md:text-5xl lg:text-6xl block font-bold">
              {text}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Frontend Developer | UI/UX Designer | Creative Thinker
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 flex-wrap mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-6 py-2 rounded-full hover:bg-primary-50 dark:hover:bg-dark-card transition duration-300"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.a
              href="https://github.com/alvinlaia11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/alvin-nonitehe-syas-putra-laia-6504a825a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:alvinlaia2004@gmail.com"
              whileHover={{ y: -5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero