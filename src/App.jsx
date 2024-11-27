import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [trails, setTrails] = useState([])
  const [sparkles, setSparkles] = useState([])
  const [clicks, setClicks] = useState([])
  
  useEffect(() => {
    let lastPosition = { x: 0, y: 0 }
    let lastTime = performance.now()
    let trailTimeouts = []
    let rafId

    const createTrail = (x, y, timestamp) => {
      if (timestamp - lastTime > 20) {
        const distance = Math.sqrt(
          Math.pow(x - lastPosition.x, 2) + 
          Math.pow(y - lastPosition.y, 2)
        )

        if (distance > 5) {
          const angle = Math.atan2(y - lastPosition.y, x - lastPosition.x)
          
          const trail = {
            id: timestamp,
            style: {
              left: `${lastPosition.x}px`,
              top: `${lastPosition.y}px`,
              width: `${Math.min(distance, 20)}px`,
              transform: `rotate(${angle}rad)`,
              opacity: 0.8
            }
          }
          
          setTrails(prev => [...prev.slice(-20), trail])
          lastPosition = { x, y }
          lastTime = timestamp

          const timeout = setTimeout(() => {
            setTrails(prev => prev.filter(t => t.id !== trail.id))
          }, 500)

          trailTimeouts.push(timeout)
        }
      }
    }

    const createSparkle = () => {
      const newSparkle = {
        id: Date.now(),
        style: {
          left: `${position.x + (Math.random() - 0.5) * 20}px`,
          top: `${position.y + (Math.random() - 0.5) * 20}px`,
          animationDelay: `${Math.random()}s`
        }
      }
      setSparkles(prev => [...prev.slice(-8), newSparkle])
    }

    const sparkleInterval = setInterval(createSparkle, 200)

    const updateCursor = (e) => {
      rafId = requestAnimationFrame((timestamp) => {
        setPosition({ x: e.clientX, y: e.clientY })
        createTrail(e.clientX, e.clientY, timestamp)
      })
    }

    const handleMouseOver = (e) => {
      const isClickable = e.target.tagName.toLowerCase() === 'a' || 
                         e.target.tagName.toLowerCase() === 'button' ||
                         e.target.closest('a') ||
                         e.target.closest('button')
      setIsHovered(isClickable)
    }

    const handleClick = (e) => {
      const clickEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      setClicks(prev => [...prev, clickEffect])

      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== clickEffect.id))
      }, 500)

      const clickSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        style: {
          left: `${e.clientX + (Math.random() - 0.5) * 40}px`,
          top: `${e.clientY + (Math.random() - 0.5) * 40}px`,
          animationDelay: `${Math.random() * 0.2}s`
        }
      }))
      setSparkles(prev => [...prev, ...clickSparkles])
    }

    window.addEventListener('mousemove', updateCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      clearInterval(sparkleInterval)
      trailTimeouts.forEach(clearTimeout)
      cancelAnimationFrame(rafId)
      window.removeEventListener('click', handleClick)
    }
  }, [position])

  return (
    <>
      {clicks.map(click => (
        <div
          key={click.id}
          className="click-effect"
          style={{
            left: `${click.x - 10}px`,
            top: `${click.y - 10}px`
          }}
        />
      ))}
      
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            ...trail.style,
            transformOrigin: 'left'
          }}
        />
      ))}
      
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="cursor-sparkle"
          style={sparkle.style}
        />
      ))}
      
      <div 
        className={`custom-cursor ${isHovered ? 'hover' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          willChange: 'transform'
        }}
      >
        <div className="cursor-pointer" />
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <CustomCursor />
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
