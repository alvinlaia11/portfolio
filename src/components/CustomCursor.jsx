import { useState, useEffect } from 'react'

function CustomCursor() {
  const [shouldRender, setShouldRender] = useState(false)
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    // Cek apakah perangkat adalah desktop
    const checkIfDesktop = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                      'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0
      
      setShouldRender(isDesktop && !isMobile)
    }

    // Handler untuk touch events
    const handleTouchStart = () => {
      setShouldRender(false)
      setPosition({ x: -100, y: -100 })
    }

    const handleTouchMove = () => {
      setShouldRender(false)
      setPosition({ x: -100, y: -100 })
    }

    const handleTouchEnd = () => {
      setShouldRender(false)
      setPosition({ x: -100, y: -100 })
    }

    // Tambahkan event listeners untuk touch events
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    // Cek saat komponen mount
    checkIfDesktop()

    // Cek saat window resize
    window.addEventListener('resize', checkIfDesktop)

    return () => {
      window.removeEventListener('resize', checkIfDesktop)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  // Jika bukan desktop atau ada touch event, tidak render apapun
  if (!shouldRender) return null

  return (
    <div 
      className="custom-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: shouldRender ? 1 : 0,
        visibility: shouldRender ? 'visible' : 'hidden'
      }}
    >
      <div className="cursor-pointer" />
    </div>
  )
}

export default CustomCursor 