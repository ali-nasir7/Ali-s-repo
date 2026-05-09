import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MESSAGE = ' We’re hiring clinical team members — Apply via Contact section'
const REPEAT = 6

export default function MarqueeBanner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <div
      style={{
        position: 'sticky',
        top: '80px',
        zIndex: 49,
        width: '100%',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(0,0,0,0.06)',

        // 🔥 Luxury soft gradient background
        background: 'linear-gradient(to right, #F5F4EF, #F8F6F1)',

        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '12px 0',
      }}
    >
      {isMobile ? (
        // ✅ Mobile version (no animation - better UX)
        <div
          style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 500,
            color: '#C9A35A',
            fontFamily: 'Inter, sans-serif',
            padding: '0 16px',
          }}
        >
          {MESSAGE}
        </div>
      ) : (
        // ✅ Desktop marquee
        <motion.div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25, // 👈 slow & readable
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{
            animationPlayState: 'paused', // 🧠 UX upgrade
          }}
        >
          {Array.from({ length: REPEAT }).map((_, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingRight: '4rem',

                // ✅ Readability improved
                fontSize: '14px',
                letterSpacing: '0.08em',
                fontWeight: 500,

                // 🎯 Logo matching gold color
                color: '#C9A35A',

                fontFamily: 'Inter, sans-serif',
              }}
            >
              {MESSAGE}

              {/* Elegant separator dot */}
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#C9A35A',
                  opacity: 0.7,
                }}
              />
            </span>
          ))}
        </motion.div>
      )}
    </div>
  )
}