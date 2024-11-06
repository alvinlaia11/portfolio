import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, setDarkMode } = useTheme()

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            Portfolio
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a href="#about" className="hover:text-primary-600 dark:text-white dark:hover:text-primary-400">About</a>
              <a href="#skills" className="hover:text-primary-600 dark:text-white dark:hover:text-primary-400">Skills</a>
              <a href="#projects" className="hover:text-primary-600 dark:text-white dark:hover:text-primary-400">Projects</a>
              <a href="#contact" className="hover:text-primary-600 dark:text-white dark:hover:text-primary-400">Contact</a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card"
            >
              {darkMode ? <FiSun className="text-white" /> : <FiMoon />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card"
            >
              {darkMode ? <FiSun className="text-white" /> : <FiMoon />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 py-4">
              <a href="#about" className="hover:text-primary-600 dark:text-white">About</a>
              <a href="#skills" className="hover:text-primary-600 dark:text-white">Skills</a>
              <a href="#projects" className="hover:text-primary-600 dark:text-white">Projects</a>
              <a href="#contact" className="hover:text-primary-600 dark:text-white">Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar