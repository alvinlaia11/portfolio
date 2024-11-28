import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import AnimatedCursor from "react-animated-cursor"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                    'ontouchstart' in window || 
                    navigator.maxTouchPoints > 0 ||
                    window.innerWidth < 1024
      setIsMobile(mobile)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <ThemeProvider>
      {!isMobile && (
        <AnimatedCursor
          innerSize={20}
          outerSize={35}
          color='0, 174, 239'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2.5}
          trailingSpeed={8}
          innerStyle={{
            clipPath: 'polygon(50% 0%, 0% 100%, 50% 75%, 100% 100%)',
            backgroundColor: '#0ea5e9',
            transform: 'rotate(-45deg)',
            mixBlendMode: 'exclusion'
          }}
          outerStyle={{
            border: '3px solid #0ea5e9',
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
